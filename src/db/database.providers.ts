import { ConfigModule, ConfigService } from '@nestjs/config';
import { dataSource } from 'src/config/typeorm.config';

export const databaseProviders = [
  {
    imports: [ConfigModule.forRoot()],
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
    inject: [ConfigService]
  },
];