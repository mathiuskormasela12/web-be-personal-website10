// ========== App Service
// import all modules
import { Body, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  public register(@Body() dto: RegisterDto) {
    return {
      statusCode: HttpStatus.CREATED,
      mesage: 'CREATED',
    };
  }
}
