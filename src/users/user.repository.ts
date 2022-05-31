import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectKnex, Knex } from 'nestjs-knex';
import { USER_TABLE } from '../constants';
import { UserInput } from './dto/user-input.dto';

@Injectable()
export class UserRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectUserByEmail(email: string): Promise<User | null> {
    const query = this.knex<User>(USER_TABLE).select<User>().where({ email });

    return (await query.first<User>()) ?? null;
  }

  async insertUser(userValues: UserInput): Promise<User> {
    const [user] = await this.knex<User>(USER_TABLE)
      .insert({
        ...userValues,
      })
      .returning('*');

    return user;
  }

  async deleteUser(id: string) {
    await this.knex<User>(USER_TABLE).delete().where({ id });
  }
}
