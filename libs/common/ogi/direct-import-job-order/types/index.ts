import { z } from 'zod';
import { DirectImportJobOrderSchema } from '../validation/direct-import-job-order.validation';

export type DirectImportJobOrderType = z.infer<
  typeof DirectImportJobOrderSchema
>;
