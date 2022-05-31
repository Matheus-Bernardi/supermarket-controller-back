import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsEmail, IsOptional, IsString } from '@nestjs/class-validator';

@Exclude()
export class GetUserInput {
  @Expose()
  @IsEmail()
  @IsString()
  @IsOptional()
  email: string;
}
