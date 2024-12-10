import { OgiPrismaService } from '@app/ogi-prisma';
import { Injectable } from '@nestjs/common';
import { MasterService } from '../master/master.service';
import { SecService } from '../sec-bridge/sec.service';

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
      const aa = await this.master.findAll();
      console.log('master findAll', aa);
    } catch (error) {
      console.error('Error in master.findAll:', error);
    }
    // await this.sec.justHello();
    await this.ogiDB.exportJobOrder.findFirst();
    // console.log('data', data);
    console.log('createDirectExportJobOrder');
    return 'createDirectExportJobOrder';
  }
}
