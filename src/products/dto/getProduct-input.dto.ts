import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString } from '@nestjs/class-validator';

@Exclude()
export class GetProductInput {
  @Expose()
  @IsString()
  description: string;
}
