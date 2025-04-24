import { HttpException, HttpStatus } from '@nestjs/common';
import { IException } from './interfaces/exceptions.interface';

export abstract class BaseException extends HttpException {
  constructor(
    public readonly code: string,
    public readonly description: string,
    public readonly details?: unknown,
    public readonly statusCode: HttpStatus = HttpStatus.BAD_REQUEST,
  ) {
    super({ code, message: description, details }, statusCode);
  }

  toResponse(): IException {
    return {
      statusCode: this.statusCode,
      code: this.code,
      message: this.description,
      details: this.safeConvertDetails(this.details),
      timestamp: new Date().toISOString(),
    };
  }

  private safeConvertDetails(details: unknown): unknown {
    if (details === undefined || details === null) {
      return undefined;
    }

    if (
      typeof details === 'string' ||
      typeof details === 'number' ||
      typeof details === 'boolean'
    ) {
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
      } catch {
        return { objectType: details.constructor.name };
      }
    }

    return details;
  }
}
