import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { ValidateMongoIdPipe } from '@/common/pipes/validate-mongo-id.pipe';
import { ITask } from './interfaces/task.interface';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async list(filters: any): Promise<Array<ITask>> {
    return this.taskService.list();
  }

  @Get('one')
  async findOne(filters: any): Promise<ITask> {
    return this.taskService.findById('');
  }

  @Get(':id')
  async findById(@Param('id', ValidateMongoIdPipe) id: string): Promise<ITask> {
    return this.taskService.findById(id);
  }

  @Post()
  async create(): Promise<any> {
    return this.taskService.list();
  }

  @Patch()
  async update(): Promise<any> {
    return this.taskService.list();
  }

  @Delete()
  async remove(id: string): Promise<any> {
    return this.taskService.list();
  }
}
