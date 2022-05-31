import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsEmail, IsString, IsUUID, MinLength } from '@nestjs/class-validator';

@Exclude()
export class UserDTO {
  @Expose()
  @IsUUID('4')
  id: string;

  @Expose()
  @IsEmail()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  @MinLength(1)
  phone: string;
}
