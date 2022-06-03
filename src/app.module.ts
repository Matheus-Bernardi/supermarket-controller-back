import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { CommonModule } from './common/common.module';
import env from './app.env';
import { UserModule } from './users/user.module';
import { ProductModule } from './products/product.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { PurchaseItemsModule } from './purchase-items/purchase-items.module';
import { ShoppingItemsModule } from './shopping-items/shopping-items.module';
import { HealthModule } from './health/health.module';

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
    HealthModule,
    CommonModule,
    UserModule,
    ProductModule,
    ShoppingListModule,
    PurchaseItemsModule,
    ShoppingItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
