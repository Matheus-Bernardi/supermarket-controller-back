import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsEmail, IsString } from '@nestjs/class-validator';

@Exclude()
export class GetUserInput {
  @Expose()
  @IsEmail()
  @IsString()
  email: string;
}
