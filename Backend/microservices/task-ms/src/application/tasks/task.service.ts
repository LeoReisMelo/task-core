import { TaskRepository } from '@/domain/repositories/task.repository';
import { Injectable, Logger } from '@nestjs/common';
import { ListTasksUseCase } from './use-cases/list-tasks.use-case';
import { ITask } from './interfaces/task.interface';
import { FindTaskByIdUseCase } from './use-cases/find-task-by-id.use-case';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private readonly taskRepository: TaskRepository) {}

  async list(): Promise<Array<ITask>> {
    const listTasksUseCase = new ListTasksUseCase(this.taskRepository);

    try {
      return listTasksUseCase.execute();
    } catch (error: any) {
      this.logger.error(`Failed to list tasks: ${error.message}`, error.stack);

      throw error;
    }
  }

  async findById(id: string): Promise<ITask> {
    const findTaskByIdUseCase = new FindTaskByIdUseCase(this.taskRepository);

    try {
      return findTaskByIdUseCase.execute(id);
    } catch (error: any) {
      this.logger.error(`Failed to list tasks: ${error.message}`, error.stack);

      throw error;
    }
  }
}
