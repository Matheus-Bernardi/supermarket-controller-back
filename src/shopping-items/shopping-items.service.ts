import { Injectable } from '@nestjs/common';
import { ShoppingItemsInput } from './dto/shopping-items-input.dto';
import { ShoppingItems } from './entities/shopping-items.entity';
import { ShoppingItemsProduct } from './entities/shopping-itemsProduct.entity';
import { ShoppingItemsRepository } from './shopping-items.repository';

@Injectable()
export class ShoppingItemsService {

  constructor(
    private shoppingitemsRepository: ShoppingItemsRepository
  ) {}

  async getShoppingItemsByListId(listId: string): Promise<ShoppingItemsProduct[]> {
    return await this.shoppingitemsRepository.selectShoppingItemsByListId(listId);
  }

  async postShoppingItems(shoppingItems: ShoppingItemsInput[]): Promise<ShoppingItems[]> {
    return await this.shoppingitemsRepository.insertShoppingItems(shoppingItems);
  }
  
  async patchShoppingItemsExpectedValue(id: string, expectedValue: number): Promise<void> {
    await this.shoppingitemsRepository.updateShoppingItemsExpectedValue(id, expectedValue);
  }

  async deleteShoppingItems(id: string): Promise<void> {
    await this.shoppingitemsRepository.deleteShoppingItems(id);
  }
}
