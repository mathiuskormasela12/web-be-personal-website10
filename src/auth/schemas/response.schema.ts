// ========== Auth Response Schemas
// import all modules
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterSuccessSchema {
  @ApiProperty({
    title: 'Response Status',
    type: Number,
    default: HttpStatus.CREATED,
    required: true,
  })
  statusCode: HttpStatus.CREATED;

  @ApiProperty({
    title: 'Response Message',
    type: String,
    default: 'CREATED',
    required: true,
  })
  message: string;
}

export class RegisterFailedSchema {
  @ApiProperty({
    title: 'Response Status',
    type: Number,
    default: HttpStatus.BAD_REQUEST,
    required: true,
  })
  statusCode: HttpStatus.BAD_REQUEST;

  @ApiProperty({
    title: 'Response Message',
    type: String,
    default: 'BAD_REQUEST',
    required: true,
  })
  message: string;

  @ApiProperty({
    title: 'Response Error Message',
    type: Object,
    default: {
      email: ['Email is required', 'Email is invalid'],
      password: ['Password is required', 'Password is too weak'],
    },
    required: true,
  })
  errors: Record<string, string[]>;
}
