import { Knex } from 'knex';
import { PRODUCT_TABLE, PURCHASE_ITEMS_TABLE, USER_TABLE } from '../../constants';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    PURCHASE_ITEMS_TABLE,
    (table: Knex.CreateTableBuilder) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('user').references('id').inTable(USER_TABLE).onDelete('CASCADE');
      table.uuid('product').references('id').inTable(PRODUCT_TABLE).onDelete('CASCADE');
      table.float('value').notNullable();
      table.timestamp('purchaseDate').notNullable().defaultTo(knex.fn.now());
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(PURCHASE_ITEMS_TABLE);
}
