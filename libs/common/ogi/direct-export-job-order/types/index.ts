import { z } from 'zod';
import { DirectExportJobOrderSchema } from '../validation/direct-export-job-order.validation';

export type DirectExportJobOrderType = z.infer<
  typeof DirectExportJobOrderSchema
>;
