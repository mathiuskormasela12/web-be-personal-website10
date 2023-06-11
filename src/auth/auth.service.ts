// ========== App Service
// import all modules
import { Body, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { IResponse } from '../types';

@Injectable()
export class AuthService {
  public register(@Body() dto: RegisterDto): IResponse<unknown> {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'CREATED',
    };
  }
}
