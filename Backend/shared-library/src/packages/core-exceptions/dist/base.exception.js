"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
const common_1 = require("@nestjs/common");
class BaseException extends common_1.HttpException {
    code;
    description;
    details;
    statusCode;
    constructor(code, description, details, statusCode = common_1.HttpStatus.BAD_REQUEST) {
        super({ code, message: description, details }, statusCode);
        this.code = code;
        this.description = description;
        this.details = details;
        this.statusCode = statusCode;
    }
    toResponse() {
        return {
            statusCode: this.statusCode,
            code: this.code,
            message: this.description,
            details: this.safeConvertDetails(this.details),
            timestamp: new Date().toISOString(),
        };
    }
    safeConvertDetails(details) {
        if (details === undefined || details === null) {
            return undefined;
        }
        if (typeof details === 'string' ||
            typeof details === 'number' ||
            typeof details === 'boolean') {
            return details;
        }
        if (details instanceof Error) {
            return {
                name: details.name,
                message: details.message,
                stack: details.stack,
            };
        }
        if (typeof details === 'object' && details !== null) {
            try {
                return JSON.parse(JSON.stringify(details));
            }
            catch {
                return { objectType: details.constructor.name };
            }
        }
        return details;
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=base.exception.js.map