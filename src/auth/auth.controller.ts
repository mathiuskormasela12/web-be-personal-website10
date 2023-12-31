// ========== Auth Controller
// import all modules
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto';
import { RegisterFailedSchema, RegisterSuccessSchema } from './schemas';
import { IResponse } from '../types';

@ApiTags('Auth')
@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: RegisterSuccessSchema,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    type: RegisterFailedSchema,
  })
  public register(@Body() dto: RegisterDto): IResponse<unknown> {
    const result: IResponse<unknown> = this.authService.register(dto);
    return result;
  }
}
