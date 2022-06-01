import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsUUID, IsNumber } from '@nestjs/class-validator';

@Exclude()
export class ShoppingItemsDTO {
  @Expose()
  @IsUUID('4')
  id: string;

  @Expose()
  @IsUUID('4')
  list: string;
  
  @Expose()
  @IsUUID('4')
  product: string;

  @Expose()
  @IsNumber()
  expectedValue: number;
}
