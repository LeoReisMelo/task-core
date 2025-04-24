import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@taskcore/core-repository';
import { TaskDocument } from '../schemas/task.schema';
import { DatabaseConnection } from '@/infrastructure/database/database.config';

@Injectable()
export class TaskRepository extends BaseRepository<TaskDocument> {
  constructor(
    @InjectModel('Task', DatabaseConnection.default)
    private readonly taskModel: Model<TaskDocument>,
  ) {
    super(taskModel);
  }
}
