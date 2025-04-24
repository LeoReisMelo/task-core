import { HttpException, HttpStatus } from '@nestjs/common';
import { IException } from './interfaces/exceptions.interface';
export declare abstract class BaseException extends HttpException {
    readonly code: string;
    readonly description: string;
    readonly details?: unknown | undefined;
    readonly statusCode: HttpStatus;
    constructor(code: string, description: string, details?: unknown | undefined, statusCode?: HttpStatus);
    toResponse(): IException;
    private safeConvertDetails;
}
//# sourceMappingURL=base.exception.d.ts.map