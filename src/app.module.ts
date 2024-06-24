import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'api_nestjs',
    entities: [],
    synchronize: true,
    logging: true,
  }),
  AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
