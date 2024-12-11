import { z } from 'zod';
import { DirectImportJobOrderSchema } from '../validation/direct-import-job-order.validation';

export type DirectImportJobOrder = z.infer<typeof DirectImportJobOrderSchema>;
