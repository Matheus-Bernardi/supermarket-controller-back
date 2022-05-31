import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectKnex, Knex } from 'nestjs-knex';
import { PRODUCT_TABLE } from '../constants';
import { ProductInput } from './dto/product-input.dto';

@Injectable()
export class ProductRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectProducts(): Promise<Product[] | null> {
    return await this.knex<Product>(PRODUCT_TABLE).select<Product[]>();
  }

  async selectProductByDescription(description: string): Promise<Product[] | null> {
    return await this.knex<Product>(PRODUCT_TABLE).select<Product[]>().where('description', 'like', `%${description}%`);
  }

  async insertProduct(productValues: ProductInput): Promise<Product> {
    const [product] = await this.knex<Product>(PRODUCT_TABLE)
      .insert({
        ...productValues,
      })
      .returning('*');

    return product;
  }

  async updateProduct(id: string, productValues: ProductInput): Promise<Product> {
    const [product] = await this.knex<Product>(PRODUCT_TABLE)
      .update({
        ...productValues,
      })
      .where({ id })
      .returning('*');

    return product;
  }

  async deleteProduct(id: string) {
    await this.knex<Product>(PRODUCT_TABLE).delete().where({ id });
  }
}
