import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString, MinLength } from '@nestjs/class-validator';

@Exclude()
export class PatchShoppingListInput {
  @Expose()
  @IsString()
  @MinLength(1)
  description: string;
}
