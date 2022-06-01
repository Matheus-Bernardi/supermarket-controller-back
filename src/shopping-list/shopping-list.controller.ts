import { TransformPlainToClass } from '@nestjs/class-transformer';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { PatchShoppingListInput } from './dto/patchShopping-list-input.dto';
import { ShoppingListInput } from './dto/shopping-list-input.dto';
import { ShoppingListDTO } from './dto/shopping-list.dto';
import { ShoppingListService } from './shopping-list.service';

@Controller('/shopping-lists')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}
    
  @Get()
  @TransformPlainToClass(ShoppingListDTO)
  async getShoppingLists(): Promise<ShoppingListDTO[]> {
    return await this.shoppingListService.getShoppingLists(); 
  }

  @Post()
  @TransformPlainToClass(ShoppingListDTO)
  async postShoppingList(@Body() shoppingList: ShoppingListInput): Promise<ShoppingListDTO> {
    return await this.shoppingListService.postShoppingList(shoppingList);
  }
  
  @Patch('/:id/description')
  @HttpCode(HttpStatus.NO_CONTENT)
  async putShoppingList(
    @Param() { id }: IdInput,
    @Body() { description }: PatchShoppingListInput
  ): Promise<void> {
    await this.shoppingListService.patchShoppingListDescription(id, description);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteShoppingList(
    @Param() { id }: IdInput,
  ) {
    return await this.shoppingListService.deleteShoppingList(id);
  }
}
