import { HttpStatus } from '@nestjs/common';
export interface IException {
    statusCode: HttpStatus;
    code: string;
    message: string;
    details?: unknown;
    timestamp: string;
}
//# sourceMappingURL=exceptions.interface.d.ts.map