import { Module } from '@nestjs/common';
import { ShoppingItemsController } from './shopping-items.controller';
import { ShoppingItemsRepository } from './shopping-items.repository';
import { ShoppingItemsService } from './shopping-items.service';

@Module({
  controllers: [ShoppingItemsController],
  providers: [ShoppingItemsService, ShoppingItemsRepository],
})
export class ShoppingItemsModule {}
