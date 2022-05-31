import { TransformPlainToClass } from '@nestjs/class-transformer';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { GetProductInput } from './dto/getProduct-input.dto';
import { ProductInput } from './dto/product-input.dto';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
    
  @Get()
  @TransformPlainToClass(ProductDTO)
  async getProducts(): Promise<ProductDTO[]> {
    return await this.productService.getProducts(); 
  }

  @Get('/filter')
  @TransformPlainToClass(ProductDTO)
  async getProduct(
    @Query() { description }: GetProductInput,
  ): Promise<ProductDTO[]> {
    return await this.productService.getProductByDescription(description); 
  }

  @Post()
  @TransformPlainToClass(ProductDTO)
  async postProduct(@Body() product: ProductInput): Promise<ProductDTO> {
    return await this.productService.postProduct(product);
  }
  
  @Put('/:id')
  @TransformPlainToClass(ProductDTO)
  async putProduct(
    @Param() { id }: IdInput,
    @Body() product: ProductInput
  ): Promise<ProductDTO> {
    return await this.productService.putProduct(id, product);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(
    @Param() { id }: IdInput,
  ) {
    return await this.productService.deleteProduct(id);
  }
}
