import { Injectable } from '@nestjs/common';
import { UserInput } from './dto/user-input.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UserService {

  constructor(
    private userRepository: UserRepository
  ) {}

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.selectUserByEmail(email);
  }

  async postUser(user: UserInput): Promise<User> {
    return await this.userRepository.insertUser(user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
