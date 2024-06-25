import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { accountProviders } from './accounts.providers';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...accountProviders,
    AccountsService
  ],
  controllers: [AccountsController],
})
export class AccountsModule {}
