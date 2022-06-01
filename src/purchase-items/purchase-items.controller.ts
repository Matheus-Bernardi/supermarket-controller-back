import { TransformPlainToClass } from '@nestjs/class-transformer';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { PurchaseItemsInput } from './dto/purchase-items-input.dto';
import { PurchaseItemsDTO } from './dto/purchase-items.dto';
import { PurchaseItemsService } from './purchase-items.service';

@Controller('/purchase-items')
export class PurchaseItemsController {
  constructor(private readonly purchaseitemsService: PurchaseItemsService) {}
    
  @Get()
  @TransformPlainToClass(PurchaseItemsDTO)
  async getPurchaseItemss(): Promise<PurchaseItemsDTO[]> {
    return await this.purchaseitemsService.getPurchaseItems(); 
  }

  @Post()
  @TransformPlainToClass(PurchaseItemsDTO)
  async postPurchaseItems(@Body() purchaseitems: PurchaseItemsInput): Promise<PurchaseItemsDTO> {
    return await this.purchaseitemsService.postPurchaseItems(purchaseitems);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletePurchaseItems(
    @Param() { id }: IdInput,
  ) {
    return await this.purchaseitemsService.deletePurchaseItems(id);
  }
}
