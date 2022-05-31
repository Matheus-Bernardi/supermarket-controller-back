import { Knex } from 'knex';
import { PRODUCT_TABLE } from '../../constants';

export async function seed(knex: Knex): Promise<void> {
  await knex(PRODUCT_TABLE).del();

  await knex(PRODUCT_TABLE).insert([
    {
      id: '0798506f-e14e-4d5c-aba6-1a372cec3cae',
      description: 'Batata',
      brand: 'Maria',
      image: 'https://picsum.photos/536/354',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: '5ebbf057-0fca-4cae-a0be-fbb5995e6c07',
      description: 'Leite',
      brand: 'Santa Clara',
      image: 'https://picsum.photos/536/354',
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
