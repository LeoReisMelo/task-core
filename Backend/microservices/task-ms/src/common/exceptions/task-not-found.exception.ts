import { HttpStatus } from '@nestjs/common';
import { BaseException, EXCEPTION_CODES } from '@taskcore/core-exceptions';

export class TaskNotFoundException extends BaseException {
  constructor(details?: object) {
    super(
      EXCEPTION_CODES.NOT_FOUND.code,
      EXCEPTION_CODES.NOT_FOUND.message,
      details,
      HttpStatus.NOT_FOUND,
    );
  }
}
