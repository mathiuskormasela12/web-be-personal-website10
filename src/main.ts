// ========== Main
// import all modules
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import compression from '@fastify/compress';
import fastifyCsrf from '@fastify/csrf-protection';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  const appPort: number = app
    .get(ConfigService)
    .get<number>('SERVICE_APP_PORT');
  const appUrl: string = app.get(ConfigService).get<string>('SERVICE_APP_URL');
  const webClientsUrl: string[] = app
    .get(ConfigService)
    .get<string>('SERVICE_WEB_CLIENTS_URL')
    .split(',');

  // Setup Helmet & Compressions
  await app.register(compression);
  await app.register(helmet);

  // Setup Csrf
  await app.register(fastifyCsrf);

  // Setup Cors
  app.enableCors({
    origin: webClientsUrl,
  });

  // Setup base url
  app.setGlobalPrefix('/api');

  // Setup Swagger UI
  const config = new DocumentBuilder()
    .setTitle('Personal Website')
    .setDescription("Personal Website's RESTful API Documentation")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  // Setup Validation Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(appPort);
  Logger.log(`The Personal Website's RESTful API is being run at ${appUrl}`);
}
bootstrap();
