import { Module } from '@nestjs/common';
import { KnexModule } from './knex/knex.module';
import { KNEX_TOKEN } from './constants';
import knexConfig from './database/knexfile';
import { CommonModule } from './common/common.module';
import { UserModule } from './users/users.module';
import { ProductModule } from './products/products.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { PurchaseItemsModule } from './purchase-items/purchase-items.module';
import { ShoppingItemsModule } from './shopping-items/shopping-items.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    KnexModule.forRoot(KNEX_TOKEN, knexConfig),
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
