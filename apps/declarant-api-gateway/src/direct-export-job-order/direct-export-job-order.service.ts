import { OgiPrismaService } from '@app/ogi-prisma';
import { SecService } from '../sec-bridge/sec.service';
import { MasterService } from '../master/master.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectExportJobOrderService {
  constructor(
    private readonly ogiDB: OgiPrismaService,
    private readonly master: MasterService,
    private readonly sec: SecService,
  ) {}

  /**
   * ------------------------------------------------------
   * PUBLIC METHODS
   * ------------------------------------------------------
   */
  /**
   * Create Direct Export Job Order
   */
  public async createDirectExportJobOrder() {
    try {
    } catch (error) {
      console.error('Error in master.findAll:', error);
    }
    // await this.sec.justHello();
    await this.ogiDB.exportJobOrder.findFirst();
    // console.log('data', data);
    console.log('createDirectExportJobOrder');
    const data = this.master.findAll();
    data.subscribe((res) => {
      console.log('res', res);
    });

    return data;
  }
}
