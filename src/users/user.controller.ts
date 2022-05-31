import { TransformPlainToClass } from '@nestjs/class-transformer';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { GetUserInput } from './dto/getUser-input.dto';
import { UserInput } from './dto/user-input.dto';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @TransformPlainToClass(UserDTO)
  async getUser(
    @Query() { email }: GetUserInput,
  ): Promise<UserDTO> {
    return await this.userService.getUserByEmail(email); 
  }

  @Post()
  @TransformPlainToClass(UserDTO)
  async postUser(@Body() user: UserInput): Promise<UserDTO> {
    return await this.userService.postUser(user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(
    @Param() { id }: IdInput,
  ) {
    return await this.userService.deleteUser(id);
  }
}
