import { Types } from 'mongoose';

export interface ITask {
  status: string;
  priority: string;
  points: number;
  assignees: Array<any>;
  tags?: Array<any> | undefined;
  _id: Types.ObjectId;
}
