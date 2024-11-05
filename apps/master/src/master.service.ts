import { MasterPrismaService } from '@app/master-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MasterService {
  constructor(private readonly masterDB: MasterPrismaService) {}
  async getHello(): Promise<string> {
    const response = await this.masterDB.client.findFirst();
    console.log(response);
    return 'Hello World from master!';
  }

  setHello(data: string) {
    console.log(data);
  }
}
