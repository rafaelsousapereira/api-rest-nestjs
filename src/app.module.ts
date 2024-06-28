import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { PaymentsModule } from './payments/payments.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [AccountsModule, PaymentsModule, DatasourceModule],
  controllers: [],
  providers: []
})
export class AppModule {}
