import { TransformPlainToClass } from '@nestjs/class-transformer';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { GetAllShoppingItemsDTO } from './dto/getAllShopping-items.dto';
import { PatchShoppingItemsInput } from './dto/patchShopping-items-input.dto';
import { ShoppingItemsInput } from './dto/shopping-items-input.dto';
import { ShoppingItemsDTO } from './dto/shopping-items.dto';
import { ShoppingItemsService } from './shopping-items.service';

@Controller('/shopping-items')
export class ShoppingItemsController {
  constructor(private readonly shoppinglistService: ShoppingItemsService) {}
    
  @Get('/filter-by-list')
  @TransformPlainToClass(GetAllShoppingItemsDTO)
  async getShoppingItemsByListId(
    @Query() { id }: IdInput,
  ): Promise<GetAllShoppingItemsDTO[]> {
    return await this.shoppinglistService.getShoppingItemsByListId(id); 
  }

  @Post()
  @TransformPlainToClass(ShoppingItemsDTO)
  async postShoppingItems(@Body() shoppinglist: ShoppingItemsInput[]): Promise<ShoppingItemsDTO[]> {
    return await this.shoppinglistService.postShoppingItems(shoppinglist);
  }
  
  @Patch('/:id/expected-value')
  @HttpCode(HttpStatus.NO_CONTENT)
  async patchShoppingItems(
    @Param() { id }: IdInput,
    @Body() { expectedValue }: PatchShoppingItemsInput
  ): Promise<void> {
    await this.shoppinglistService.patchShoppingItemsExpectedValue(id, expectedValue);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteShoppingItems(
    @Param() { id }: IdInput,
  ) {
    return await this.shoppinglistService.deleteShoppingItems(id);
  }
}
