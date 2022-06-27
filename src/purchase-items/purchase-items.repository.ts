import { Inject, Injectable } from '@nestjs/common';
import { PurchaseItems } from './entities/purchase-items.entity';
import { Knex } from 'knex';
import { KNEX_TOKEN, PURCHASE_ITEMS_TABLE } from '../constants';
import { PurchaseItemsInput } from './dto/purchase-items-input.dto';

@Injectable()
export class PurchaseItemsRepository {

  constructor(
    @Inject(KNEX_TOKEN) private readonly knex: Knex,
  ) {}
  
  async selectPurchaseItems(): Promise<PurchaseItems[] | null> {
    return await this.knex<PurchaseItems>(PURCHASE_ITEMS_TABLE)
      .select<PurchaseItems[]>();
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

  async deletePurchaseItemsByDate(userId: string, filterDate: string) {
    await this.knex<PurchaseItems>(PURCHASE_ITEMS_TABLE)
      .delete()
      .where({ user: userId })
      .andWhere('purchaseDate', '<', filterDate);
  }
}
