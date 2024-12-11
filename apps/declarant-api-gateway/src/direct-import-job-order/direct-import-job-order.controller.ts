import { Body, Controller, Post } from '@nestjs/common';
import { DirectImportJobOrderType } from 'libs/common/ogi/direct-import-job-order/types';
import { DirectImportJobOrderSchema } from 'libs/common/ogi/direct-import-job-order/validation/direct-import-job-order.validation';

@Controller('direct-import-job-order')
export class DirectImportJobOrderController {
  constructor() {}

  @Post()
  async createDirectImportJobOrder(
    @Body() directImportJobOrder: DirectImportJobOrderType,
  ) {
    const schemaValidation =
      await DirectImportJobOrderSchema.safeParseAsync(directImportJobOrder);

    if (!schemaValidation.success) {
      console.log(schemaValidation);
      const errors = schemaValidation.error;
      console.log(errors);
    }

    return 'createDirectImportJobOrder';
  }
}
