import { Knex } from 'knex';
import * as path from 'path';
import env from '../app.env';


const knexConfigs: Knex.Config = {
  client: 'pg',
  connection: {
    host: env.DATABASE_HOST,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE,
    port: env.DATABASE_PORT,
  },
  migrations: {
    tableName: 'migrations',
    directory: path.join(__dirname, 'migrations'),
  },
  seeds: {
    timestampFilenamePrefix: false,
    directory: path.join(__dirname, 'seeds'),
  },
};

export default Object.freeze(knexConfigs);
