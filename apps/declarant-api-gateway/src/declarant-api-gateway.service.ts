// import { OgiPrismaService } from '@app/ogi-prisma';

import { MasterPrismaService } from '@app/master-prisma';
import { OgiPrismaService } from '@app/ogi-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeclarantApiGatewayService {
  constructor(
    private readonly ogiDB: OgiPrismaService,
    private readonly masterDB: MasterPrismaService,
  ) {}
  async getHello(): Promise<string> {
    const response = await this.ogiDB.exportJobOrder.findFirst();
    // const responseMaster = await this.masterDB.client.findFirst();
    console.log(response);

    return 'Hello World!';
  }
}
