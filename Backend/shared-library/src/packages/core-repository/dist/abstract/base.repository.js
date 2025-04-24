"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(entity, session) {
        const doc = new this.model(entity);
        return session ? doc.save({ session }) : doc.save();
    }
    async findOne(filters, options = {}) {
        return this.model.findOne(filters, null, options).exec();
    }
    async findById(id, options = {}) {
        return this.model.findById(id, null, options).exec();
    }
    async list({ skip = 0, limit = 10, filters = {}, sort = 'desc', sortField = 'createdAt', populate = [] } = {}) {
        const query = this.model.find();
        return query.exec();
    }
    async update(id, updates, options = { new: true }) {
        return this.model.findByIdAndUpdate(id, updates, options).exec();
    }
    async delete(id) {
        const result = await this.model.deleteOne({ _id: id }).exec();
        return result.deletedCount === 1;
    }
    async exists(filters) {
        const count = await this.model.countDocuments(filters).exec();
        return count > 0;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map