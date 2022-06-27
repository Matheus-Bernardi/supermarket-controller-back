import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductRepository } from './products.repository';
import { ProductService } from './products.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
