import { Injectable } from '@nestjs/common';
import { ShoppingList } from './entities/shopping-list.entity';
import { InjectKnex, Knex } from 'nestjs-knex';
import { SHOPPING_LIST_TABLE } from '../constants';
import { ShoppingListInput } from './dto/shopping-list-input.dto';

@Injectable()
export class ShoppingListRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectShoppingLists(): Promise<ShoppingList[] | null> {
    return await this.knex<ShoppingList>(SHOPPING_LIST_TABLE).select<ShoppingList[]>();
  }

  async insertShoppingList(shoppinglistValues: ShoppingListInput): Promise<ShoppingList> {
    const [shoppinglist] = await this.knex<ShoppingList>(SHOPPING_LIST_TABLE)
      .insert({
        ...shoppinglistValues,
      })
      .returning('*');

    return shoppinglist;
  }

  async updateShoppingListDescription(id: string, description: string): Promise<void> {
    await this.knex<ShoppingList>(SHOPPING_LIST_TABLE)
      .update({ description })
      .where({ id });
  }

  async updateShoppingListTotal(id: string, total: number): Promise<void> {
    await this.knex<ShoppingList>(SHOPPING_LIST_TABLE)
      .update({ total })
      .where({ id });
  }

  async deleteShoppingList(id: string) {
    await this.knex<ShoppingList>(SHOPPING_LIST_TABLE).delete().where({ id });
  }
}
