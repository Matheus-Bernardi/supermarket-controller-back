import { Injectable } from '@nestjs/common';
import { ProductInput } from './dto/product-input.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductService {

  constructor(
    private productRepository: ProductRepository
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.selectProducts();
  }

  async getProductByDescription(description: string): Promise<Product[]> {
    return await this.productRepository.selectProductByDescription(description);
  }

  async postProduct(product: ProductInput): Promise<Product> {
    return await this.productRepository.insertProduct(product);
  }
  
  async putProduct(id: string, product: ProductInput): Promise<Product> {
    return await this.productRepository.updateProduct(id, product);
  }

  async deleteProduct(id: string): Promise<void> {
    await this.productRepository.deleteProduct(id);
  }
}
