import { ConfigModule, ConfigModuleOptions, ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

ConfigModule.forRoot({
  isGlobal: true,
} as ConfigModuleOptions)

const configService = new ConfigService()

export const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT') || 5432,
  username: configService.get<string>('DATABASE_USERNAME'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/../db/migrations/*{.ts,.js}'],
})