import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Task & Document<Types.ObjectId>;

@Schema({ timestamps: true, collection: 'task' })
export class Task {
  @Prop({
    required: true,
    type: String,
  })
  title: string;

  @Prop({
    type: {
      text: { type: String },
      attachments: [{ type: Types.ObjectId, ref: 'Attachment' }],
    },
  })
  description: {
    text: string;
    attachments: Types.ObjectId[];
  };

  @Prop({
    required: true,
    enum: [
      'pending',
      'in_progress',
      'done',
      'canceled',
      'review',
      'QA',
      'ready_to_deploy',
    ],
    default: 'pending',
  })
  status: string;

  @Prop({
    required: true,
    enum: ['low', 'medium', 'high', 'critic'],
    default: 'medium',
  })
  priority: string;

  @Prop({ required: true, default: 10 })
  points: number;

  @Prop({ required: true, default: 0 })
  coins: number;

  @Prop({ required: true, default: 0 })
  experience: number;

  @Prop({ type: Types.ObjectId, ref: 'Team', required: true })
  team: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  creator: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: 'User', required: true })
  assignees: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'User' })
  updatedBy: Types.ObjectId;

  @Prop({
    type: Date,
  })
  due_date?: { type: Date };

  @Prop({
    type: Date,
  })
  completed_at?: { type: Date };

  @Prop({
    type: [String],
  })
  tags?: [];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
