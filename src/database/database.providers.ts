import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    imports: [ConfigModule.forRoot()],
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
      });

      return dataSource.initialize();
    },
  },
];