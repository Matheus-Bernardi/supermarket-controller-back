import { Knex } from 'knex';
import { PRODUCT_TABLE, SHOPPING_ITEMS_TABLE, SHOPPING_LIST_TABLE } from '../../constants';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    SHOPPING_ITEMS_TABLE,
    (table: Knex.CreateTableBuilder) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('list').references('id').inTable(SHOPPING_LIST_TABLE).onDelete('CASCADE');
      table.uuid('product').references('id').inTable(PRODUCT_TABLE).onDelete('CASCADE');
      table.float('expectedValue').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(SHOPPING_ITEMS_TABLE);
}
