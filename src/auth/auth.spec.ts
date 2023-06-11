// ========== Auth Spec
// import all modules
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('Register User', () => {
    it('should return 201', () => {
      const body = {
        email: 'jhon@mail.com',
        password: 'Jh0nd0e12$',
      };

      expect(authController.register(body)).toEqual({
        statusCode: 201,
        mesage: 'CREATED',
      });
    });
  });
});
