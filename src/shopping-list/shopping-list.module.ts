import { Module } from '@nestjs/common';
import { ShoppingListController } from './shopping-list.controller';
import { ShoppingListRepository } from './shopping-list.repository';
import { ShoppingListService } from './shopping-list.service';

@Module({
  controllers: [ShoppingListController],
  providers: [ShoppingListService, ShoppingListRepository],
})
export class ShoppingListModule {}
