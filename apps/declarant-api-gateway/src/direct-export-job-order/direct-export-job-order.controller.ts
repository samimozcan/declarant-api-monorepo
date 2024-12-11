import { Body, Controller, Get, Post } from '@nestjs/common';
import { DirectExportJobOrderService } from './direct-export-job-order.service';
import { DirectExportJobOrderType } from 'libs/common/ogi/direct-export-job-order/types';
import { DirectExportJobOrderSchema } from 'libs/common/ogi/direct-export-job-order/validation/direct-export-job-order.validation';

@Controller('direct-export-job-order')
export class DirectExportJobOrderController {
  constructor(
    private readonly directExportJobOrderService: DirectExportJobOrderService,
  ) {}

  @Get()
  async getDirectExportJobOrder() {
    return this.directExportJobOrderService.createDirectExportJobOrder();
  }

  @Post()
  async createDirectExportJobOrder(
    @Body() directExportJobOrder: DirectExportJobOrderType,
  ) {
    const schemaValidation =
      await DirectExportJobOrderSchema.safeParseAsync(directExportJobOrder);

    if (!schemaValidation.success) {
      console.log(schemaValidation);
      const errors = schemaValidation.error;
      console.log(errors);
    }

    return 'createDirectExportJobOrder';
  }
}
