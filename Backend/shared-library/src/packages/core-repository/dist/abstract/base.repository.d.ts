import { FilterQuery, Model, QueryOptions, ClientSession } from 'mongoose';
import { IEntity } from '../interfaces/entity.interface';
import { IRepository, ListParams } from '../interfaces/repository.interface';
export declare abstract class BaseRepository<T extends IEntity> implements IRepository<T> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    create(entity: Partial<T>, session?: ClientSession): Promise<T>;
    findOne(filters: FilterQuery<T>, options?: QueryOptions): Promise<T | null>;
    findById(id: string, options?: QueryOptions): Promise<T | null>;
    list({ skip, limit, filters, sort, sortField, populate }?: ListParams<T>): Promise<T[]>;
    update(id: string, updates: Partial<T>, options?: QueryOptions): Promise<T | null>;
    delete(id: string): Promise<boolean>;
    exists(filters: FilterQuery<T>): Promise<boolean>;
}
//# sourceMappingURL=base.repository.d.ts.map