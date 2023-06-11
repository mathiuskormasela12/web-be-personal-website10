// ========== Auth e2e Spec
// import all modules
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuthModule } from '../src/auth/auth.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/v1/auth/register (POST)', () => {
    const body = {
      email: 'jhon@mail.com',
      password: 'Jh0nd0e12$',
    };

    return request(app.getHttpServer())
      .post('/v1/auth/register')
      .send(body)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          statusCode: 201,
          message: 'CREATED',
        });
      });
  });
});
