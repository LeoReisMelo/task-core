import { TaskRepository } from '@/domain/repositories/task.repository';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ListTasksUseCase {
  private readonly logger = new Logger(ListTasksUseCase.name);

  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(): Promise<any> {
    this.logger.log('Listing tasks');

    return this.taskRepository.list();
  }
}
