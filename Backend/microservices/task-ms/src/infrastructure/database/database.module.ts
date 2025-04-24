import 'dotenv/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DatabaseConnection } from './database.config';
import config from '@/config/configuration';

@Module({
  imports: [
    MongooseModule.forRoot(config().database.uri, {
      dbName: 'tasks',
      connectionName: DatabaseConnection.default,
    }),
  ],
})
export class DatabaseModule {
  static async forFeature(models?: ModelDefinition[]) {
    return MongooseModule.forFeature(models, DatabaseConnection.default);
  }
}
