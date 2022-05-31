import { Knex } from 'knex';
import { User } from '../../users/entities/user.entity';
import { USER_TABLE } from '../../constants';

export async function seed(knex: Knex): Promise<void> {
  await knex(USER_TABLE).del();

  await knex<User>(USER_TABLE).insert([
    {
      id: '4d13575f-64a1-4fd4-b96b-19a6e354388a',
      email: 'john.doe@gmail.com',
      phone: '54 9 9999-9999',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: '3ca1be5d-6937-44f8-a9d7-ed1dcfb80774',
      email: 'jane.doe@gmail.com',
      phone: '54 9 9999-9999',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
