import { DirectExportJobOrder } from '@app/common/ogi/direct-export-job-order/types';
import { DirectExportJobOrderSchema } from '@app/common/ogi/direct-export-job-order/validation/direct-export-job-order.validation';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('direct-export-job-order')
export class DirectExportJobOrderController {
  constructor() {}

  @Get()
  getDirectExportJobOrder(): string {
    return 'Hello World!';
  }

  @Post()
  async createDirectExportJobOrder(
    @Body() directExportJobOrder: DirectExportJobOrder,
  ): Promise<DirectExportJobOrder> {
    try {
      console.log('schema', DirectExportJobOrderSchema);
      await DirectExportJobOrderSchema.parseAsync(directExportJobOrder);
    } catch (error) {
      console.log('error: ', error);
    }
    // console.log('job-order: ', directExportJobOrder);

    return directExportJobOrder;
  }
}
