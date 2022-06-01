import { Injectable } from '@nestjs/common';
import { ShoppingListInput } from './dto/shopping-list-input.dto';
import { ShoppingList } from './entities/shopping-list.entity';
import { ShoppingListRepository } from './shopping-list.repository';

@Injectable()
export class ShoppingListService {

  constructor(
    private shoppingListRepository: ShoppingListRepository
  ) {}

  async getShoppingLists(): Promise<ShoppingList[]> {
    return await this.shoppingListRepository.selectShoppingLists();
  }

  async postShoppingList(shoppingList: ShoppingListInput): Promise<ShoppingList> {
    return await this.shoppingListRepository.insertShoppingList(shoppingList);
  }
  
  async patchShoppingListDescription(id: string, description: string): Promise<void> {
    await this.shoppingListRepository.updateShoppingListDescription(id, description);
  }

  async patchShoppingListTotal(id: string, total: number): Promise<void> {
    await this.shoppingListRepository.updateShoppingListTotal(id, total);
  }

  async deleteShoppingList(id: string): Promise<void> {
    await this.shoppingListRepository.deleteShoppingList(id);
  }
}
