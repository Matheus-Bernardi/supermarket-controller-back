import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsDate, IsOptional, IsNumber, IsUUID } from '@nestjs/class-validator';

@Exclude()
export class PurchaseItemsDTO {
  @Expose()
  @IsUUID('4')
  id: string;

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
