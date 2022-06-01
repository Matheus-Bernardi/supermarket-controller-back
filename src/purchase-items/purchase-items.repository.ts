import { Injectable } from '@nestjs/common';
import { PurchaseItems } from './entities/purchase-items.entity';
import { InjectKnex, Knex } from 'nestjs-knex';
import { PRODUCT_TABLE, PURCHASE_ITEMS_TABLE } from '../constants';
import { PurchaseItemsInput } from './dto/purchase-items-input.dto';

@Injectable()
export class PurchaseItemsRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectPurchaseItems(): Promise<PurchaseItems[] | null> {
    return await this.knex<PurchaseItems>(PURCHASE_ITEMS_TABLE)
      .select<PurchaseItems[]>()
      .leftJoin(PRODUCT_TABLE, `${PRODUCT_TABLE}.id`, `${PURCHASE_ITEMS_TABLE}.product`);
  }

  async insertPurchaseItems(purchaseItemsValues: PurchaseItemsInput): Promise<PurchaseItems> {
    const [purchaseItems] = await this.knex<PurchaseItems>(PURCHASE_ITEMS_TABLE)
      .insert({
        ...purchaseItemsValues,
      })
      .returning('*');

    return purchaseItems;
  }

  async deletePurchaseItemsById(id: string) {
    await this.knex<PurchaseItems>(PURCHASE_ITEMS_TABLE).delete().where({ id });
  }

  async deletePurchaseItemsByDate(id: string, filterDate: string) {
    await this.knex<PurchaseItems>(PURCHASE_ITEMS_TABLE)
      .delete()
      .where({ id })
      .andWhere('purchaseDate', '<', filterDate);
  }
}
