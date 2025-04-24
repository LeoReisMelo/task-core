import { FilterQuery, QueryOptions } from 'mongoose';
import { IEntity } from './entity.interface';

export interface IRepository<T extends IEntity> {
  create(entity: Partial<T>, session?: any): Promise<T>;
  findOne(filters: FilterQuery<T>, options?: QueryOptions): Promise<T | null>;
  findById(id: string, options?: QueryOptions): Promise<T | null>;
  list(params?: ListParams<T>): Promise<T[]>;
  update(id: string, updates: Partial<T>, options?: QueryOptions): Promise<T | null>;
  delete(id: string): Promise<boolean>;
  exists(filters: FilterQuery<T>): Promise<boolean>;
}

export interface ListParams<T> {
  skip?: number;
  limit?: number;
  filters?: FilterQuery<T>;
  sort?: 'asc' | 'desc';
  sortField?: string;
  populate?: string[];
}