import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { AccountsController } from './accounts/accounts.controller';
import { AccountsService } from './accounts/accounts.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AccountsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
