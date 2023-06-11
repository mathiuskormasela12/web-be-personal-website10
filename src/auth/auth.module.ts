// ========== Auth Module
// import all modules
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TransformInterceptor } from '../interceptors/transform.interceptor';
import { ValidationPipe } from '../pipes/validation.pipe';

@Module({
  controllers: [AuthController],
  providers: [
    // Binding Interceptor
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },

    // Banding Validation Pipe
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },

    // Define Providers
    AuthService,
  ],
})
export class AuthModule {}
