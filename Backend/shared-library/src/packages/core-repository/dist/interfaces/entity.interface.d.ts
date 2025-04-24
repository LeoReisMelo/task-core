import { Document, Types } from 'mongoose';
export interface IEntity extends Document {
    _id: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=entity.interface.d.ts.map