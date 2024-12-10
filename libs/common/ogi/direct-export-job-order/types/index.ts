import { z } from 'zod';
import { DirectExportJobOrderSchema } from '../validation/direct-export-job-order.validation';

export type DirectExportJobOrder = z.infer<typeof DirectExportJobOrderSchema>;
