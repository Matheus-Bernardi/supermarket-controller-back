import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsNumber, IsUUID } from '@nestjs/class-validator';

@Exclude()
export class ShoppingItemsInput {
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
