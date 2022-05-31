import { Injectable } from '@nestjs/common';
import { ShoppingListInput } from './dto/shopping-list-input.dto';
import { ShoppingList } from './entities/shopping-list.entity';
import { ShoppingListRepository } from './shopping-list.repository';

@Injectable()
export class ShoppingListService {

  constructor(
    private shoppinglistRepository: ShoppingListRepository
  ) {}

  async getShoppingLists(): Promise<ShoppingList[]> {
    return await this.shoppinglistRepository.selectShoppingLists();
  }

  async postShoppingList(shoppinglist: ShoppingListInput): Promise<ShoppingList> {
    return await this.shoppinglistRepository.insertShoppingList(shoppinglist);
  }
  
  async patchShoppingListDescription(id: string, description: string): Promise<void> {
    await this.shoppinglistRepository.updateShoppingListDescription(id, description);
  }

  async patchShoppingListTotal(id: string, total: number): Promise<void> {
    await this.shoppinglistRepository.updateShoppingListTotal(id, total);
  }

  async deleteShoppingList(id: string): Promise<void> {
    await this.shoppinglistRepository.deleteShoppingList(id);
  }
}
