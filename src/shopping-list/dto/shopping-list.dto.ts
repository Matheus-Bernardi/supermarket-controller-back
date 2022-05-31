import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString, IsUUID, MinLength } from '@nestjs/class-validator';
import { IsNumber } from 'class-validator';

@Exclude()
export class ShoppingListDTO {
  @Expose()
  @IsUUID('4')
  id: string;

  @Expose()
  @IsUUID('4')
  user: string;

  @Expose()
  @IsString()
  @MinLength(1)
  description: string;
  
  @Expose()
  @IsNumber()
  total: number;
}
