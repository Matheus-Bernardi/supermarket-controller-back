import { Knex } from 'knex';
import { SHOPPING_LIST_TABLE } from '../../constants';

export async function seed(knex: Knex): Promise<void> {
  await knex(SHOPPING_LIST_TABLE).del();

  await knex(SHOPPING_LIST_TABLE).insert([
    {
      id: '4d13575f-64a1-4fd4-b96b-19a6e354388b',
      user: '4d13575f-64a1-4fd4-b96b-19a6e354388a',
      description: 'Lista de compras',
      total: 1000.00,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: '3ca1be5d-6937-44f8-a9d7-ed1dcfb80773',
      user: '4d13575f-64a1-4fd4-b96b-19a6e354388a',
      description: 'Lista de compras 2',
      total: 50.00,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
