import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString, MinLength } from '@nestjs/class-validator';
import { ShoppingItemsDTO } from './shopping-items.dto';

@Exclude()
export class GetAllShoppingItemsDTO extends ShoppingItemsDTO {
  @Expose()
  @IsString()
  @MinLength(1)
  description: string;

  @Expose()
  @IsString()
  @MinLength(1)
  brand: string;
  
  @Expose()
  @IsString()
  @MinLength(1)
  image: string;
}
