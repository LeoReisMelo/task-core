import {
  FilterQuery,
  Model,
  QueryOptions,
  ClientSession,
} from 'mongoose';
import { IEntity } from '../interfaces/entity.interface';
import { IRepository, ListParams } from '../interfaces/repository.interface';

export abstract class BaseRepository<T extends IEntity> implements IRepository<T> {
  constructor(protected readonly model: Model<T>) {}

  async create(entity: Partial<T>, session?: ClientSession): Promise<T> {
    const doc = new this.model(entity);
    return session ? doc.save({ session }) : doc.save();
  }

  async findOne(
    filters: FilterQuery<T>,
    options: QueryOptions = {}
  ): Promise<T | null> {
    return this.model.findOne(filters, null, options).exec();
  }

  async findById(
    id: string,
    options: QueryOptions = {}
  ): Promise<T | null> {
    return this.model.findById(id, null, options).exec();
  }

  async list({
    skip = 0,
    limit = 10,
    filters = {},
    sort = 'desc',
    sortField = 'createdAt',
    populate = []
  }: ListParams<T> = {}): Promise<T[]> {
    const query = this.model.find()
      // .skip(skip)
      // .limit(limit)
      // .sort({ [sortField]: sort === 'desc' ? -1 : 1 })
      // .populate(populate);

    return query.exec();
  }

  async update(
    id: string,
    updates: Partial<T>,
    options: QueryOptions = { new: true }
  ): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, updates, options).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.model.deleteOne({ _id: id }).exec();
    return result.deletedCount === 1;
  }

  async exists(filters: FilterQuery<T>): Promise<boolean> {
    const count = await this.model.countDocuments(filters).exec();
    return count > 0;
  }
}