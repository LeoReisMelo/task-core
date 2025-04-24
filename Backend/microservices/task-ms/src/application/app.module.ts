import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '@/config/configuration';
import { DatabaseModule } from '@/infrastructure/database/database.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '.env',
    }),
    DatabaseModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
