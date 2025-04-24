import { requiredEnv } from '@/infrastructure/utils/env';
import { IConfig } from './interfaces/config.interface';

export default (): IConfig => ({
  database: {
    uri: requiredEnv('DATABASE_CONNECTION'),
  },
  application: {
    port: Number(requiredEnv('PORT')),
  },
});
