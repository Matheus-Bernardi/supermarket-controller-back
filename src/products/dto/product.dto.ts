import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString, IsUUID, MinLength } from '@nestjs/class-validator';

@Exclude()
export class ProductDTO {
  @Expose()
  @IsUUID('4')
  id: string;

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
