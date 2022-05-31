import { Knex } from 'knex';
import { SHOPPING_LIST_TABLE, USER_TABLE } from '../../constants';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    SHOPPING_LIST_TABLE,
    (table: Knex.CreateTableBuilder) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('user').references('id').inTable(USER_TABLE).onDelete('CASCADE');
      table.text('description').notNullable();
      table.float('total').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(SHOPPING_LIST_TABLE);
}
