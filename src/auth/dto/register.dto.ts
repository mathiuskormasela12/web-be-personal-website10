// ========== Register Dto
// import all modules
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    title: 'Email',
    type: String,
    default: 'jhon@mail.com',
    required: true,
  })
  @IsEmail({}, { message: 'Email is invalid' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    title: 'Password',
    type: String,
    default: 'Jh0hnd0e$',
    required: true,
  })
  @IsStrongPassword({ minLength: 5 }, { message: 'Password is too weak' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
