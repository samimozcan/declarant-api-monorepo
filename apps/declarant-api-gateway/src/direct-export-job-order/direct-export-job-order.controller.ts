import { Controller, Get, Post } from '@nestjs/common';
import { DirectExportJobOrderService } from './direct-export-job-order.service';

@Controller('direct-export-job-order')
export class DirectExportJobOrderController {
  constructor(
    private readonly directExportJobOrderService: DirectExportJobOrderService,
  ) {}

  @Get()
  async getDirectExportJobOrder() {
    return this.directExportJobOrderService.createDirectExportJobOrder();
  }

  @Post('create')
  async createDirectExportJobOrder() {
    try {
      const result =
        await this.directExportJobOrderService.createDirectExportJobOrder();
      return result;
    } catch (error) {
      console.error('Error in createDirectExportJobOrder:', error);
      throw error;
    }
  }
}
