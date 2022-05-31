import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsNumber, IsString, IsUUID, MinLength } from '@nestjs/class-validator';

@Exclude()
export class ShoppingListInput {
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
