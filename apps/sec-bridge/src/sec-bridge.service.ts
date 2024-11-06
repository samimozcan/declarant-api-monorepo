import { SecPrismaService } from '@app/sec-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SecBridgeService {
  constructor(private readonly secDB: SecPrismaService) {}
  async getHello(): Promise<string> {
    const declaration = await this.secDB.secDeclaration.findFirst();
    console.log(declaration);
    return 'Hello World!';
  }
}
