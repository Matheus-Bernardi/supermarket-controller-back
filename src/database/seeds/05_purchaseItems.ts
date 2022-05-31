import { Knex } from 'knex';
import { PURCHASE_ITEMS_TABLE } from '../../constants';

export async function seed(knex: Knex): Promise<void> {
  await knex(PURCHASE_ITEMS_TABLE).del();

  await knex(PURCHASE_ITEMS_TABLE).insert([
    {
      id: '7c862749-d5f2-4c66-b37e-65dd4eee73ec',
      user: '4d13575f-64a1-4fd4-b96b-19a6e354388a',
      product: '0798506f-e14e-4d5c-aba6-1a372cec3cae',
      value: 5.00,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: '6b34c775-ec3f-475e-b129-8c8367e2f2ac',
      user: '3ca1be5d-6937-44f8-a9d7-ed1dcfb80774',
      product: '0798506f-e14e-4d5c-aba6-1a372cec3cae',
      value: 3.00,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
