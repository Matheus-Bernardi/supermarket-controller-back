import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsDate, IsNumber, IsString, IsUUID, MinLength } from '@nestjs/class-validator';
import { IsOptional } from 'class-validator';

@Exclude()
export class PurchaseItemsInput {
  @Expose()
  @IsUUID('4')
  user: string;

  @Expose()
  @IsUUID('4')
  product: string;

  @Expose()
  @IsNumber()
  value: number;
  
  @Expose()
  @IsDate()
  @IsOptional()
  purchaseDate: Date;
}
