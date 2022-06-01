import { Injectable } from '@nestjs/common';
import { PurchaseItemsInput } from './dto/purchase-items-input.dto';
import { PurchaseItems } from './entities/purchase-items.entity';
import { PurchaseItemsRepository } from './purchase-items.repository';

@Injectable()
export class PurchaseItemsService {

  constructor(
    private purchaseitemsRepository: PurchaseItemsRepository
  ) {}

  async getPurchaseItems(): Promise<PurchaseItems[]> {
    return await this.purchaseitemsRepository.selectPurchaseItems();
  }

  async postPurchaseItems(purchaseitems: PurchaseItemsInput): Promise<PurchaseItems> {
    return await this.purchaseitemsRepository.insertPurchaseItems(purchaseitems);
  }

  async deletePurchaseItems(id: string): Promise<void> {
    await this.purchaseitemsRepository.deletePurchaseItemsById(id);
  }
}
