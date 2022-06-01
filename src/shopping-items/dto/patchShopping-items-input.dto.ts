import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsNumber } from '@nestjs/class-validator';

@Exclude()
export class PatchShoppingItemsInput {
  @Expose()
  @IsNumber()
  expectedValue: number;
}
