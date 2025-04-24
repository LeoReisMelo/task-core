import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from '@/domain/repositories/task.repository';
import { DatabaseModule } from '@/infrastructure/database/database.module';
import { TaskSchema } from '@/domain/schemas/task.schema';
@Module({
  imports: [
    DatabaseModule.forFeature([
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
