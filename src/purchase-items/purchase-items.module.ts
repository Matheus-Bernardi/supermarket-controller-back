import { Module } from '@nestjs/common';
import { PurchaseItemsController } from './purchase-items.controller';
import { PurchaseItemsRepository } from './purchase-items.repository';
import { PurchaseItemsService } from './purchase-items.service';

@Module({
  controllers: [PurchaseItemsController],
  providers: [PurchaseItemsService, PurchaseItemsRepository],
})
export class PurchaseItemsModule {}
