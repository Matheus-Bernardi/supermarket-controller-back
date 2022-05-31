import { Knex } from 'knex';
import { SHOPPING_ITEMS_TABLE } from '../../constants';

export async function seed(knex: Knex): Promise<void> {
  await knex(SHOPPING_ITEMS_TABLE).del();

  await knex(SHOPPING_ITEMS_TABLE).insert([
    {
      id: 'e52040de-707c-46e9-b731-8995d3320a77',
      list: '4d13575f-64a1-4fd4-b96b-19a6e354388b',
      product: '0798506f-e14e-4d5c-aba6-1a372cec3cae',
      expectedValue: 5.00,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: '09e99d56-bea3-409e-8f60-79f1f92f0276',
      list: '3ca1be5d-6937-44f8-a9d7-ed1dcfb80773',
      product: '5ebbf057-0fca-4cae-a0be-fbb5995e6c07',
      expectedValue: 20.00,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
