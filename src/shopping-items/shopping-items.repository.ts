import { Injectable } from '@nestjs/common';
import { ShoppingItems } from './entities/shopping-items.entity';
import { InjectKnex, Knex } from 'nestjs-knex';
import { PRODUCT_TABLE, SHOPPING_ITEMS_TABLE } from '../constants';
import { ShoppingItemsInput } from './dto/shopping-items-input.dto';
import { ShoppingItemsProduct } from './entities/shopping-itemsProduct.entity';

@Injectable()
export class ShoppingItemsRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectShoppingItemsByListId(listId: string): Promise<ShoppingItemsProduct[]> {
    return await this.knex<ShoppingItemsProduct>(SHOPPING_ITEMS_TABLE)
      .select<ShoppingItemsProduct[]>(
        `${SHOPPING_ITEMS_TABLE}.*`,
        `${PRODUCT_TABLE}.description`,
        `${PRODUCT_TABLE}.brand`,
        `${PRODUCT_TABLE}.image`
      )
      .leftJoin(PRODUCT_TABLE, `${SHOPPING_ITEMS_TABLE}.product`, `${PRODUCT_TABLE}.id`)
      .where({ list: listId });
  }

  async insertShoppingItems(shoppingItemsValues: ShoppingItemsInput[]): Promise<ShoppingItems[]> {
    return await this.knex<ShoppingItems>(SHOPPING_ITEMS_TABLE)
      .insert(shoppingItemsValues)
      .returning('*');
  }

  async updateShoppingItemsExpectedValue(id: string, expectedValue: number): Promise<void> {
    await this.knex<ShoppingItems>(SHOPPING_ITEMS_TABLE)
      .update({ expectedValue })
      .where({ id });
  }

  async deleteShoppingItems(id: string) {
    await this.knex<ShoppingItems>(SHOPPING_ITEMS_TABLE).delete().where({ id });
  }
}
