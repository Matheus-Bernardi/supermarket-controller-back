import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString, MinLength } from '@nestjs/class-validator';

@Exclude()
export class ProductInput {
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
