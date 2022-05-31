import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { CommonModule } from './common/common.module';
import env from './app.env';
import { UserModule } from './users/user.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: env.DATABASE_HOST,
          port: Number(env.DATABASE_PORT),
          user: env.DATABASE_USER,
          password: env.DATABASE_PASSWORD,
          database: env.DATABASE,
        },
      },
    }),
    CommonModule,
    UserModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
