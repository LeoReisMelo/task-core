import { TaskRepository } from '@/domain/repositories/task.repository';
import { Injectable, Logger } from '@nestjs/common';
import { ITask } from '../interfaces/task.interface';
import { TaskNotFoundException } from '@/common/exceptions/task-not-found.exception';

@Injectable()
export class FindTaskByIdUseCase {
  private readonly logger = new Logger(FindTaskByIdUseCase.name);

  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(id: string): Promise<ITask> {
    this.logger.debug(`Find a task by id: ${id}`);

    const task = await this.taskRepository.findById(id);

    if (!task) {
      this.logger.warn('Task not found');

      throw new TaskNotFoundException({ problem: 'Task not found' });
    }

    this.logger.log('Success to find a task');

    return task;
  }
}
