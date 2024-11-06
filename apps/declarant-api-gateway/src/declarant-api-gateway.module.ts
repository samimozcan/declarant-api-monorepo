import { Module } from '@nestjs/common';
import { DeclarantApiGatewayController } from './declarant-api-gateway.controller';
import { DeclarantApiGatewayService } from './declarant-api-gateway.service';
import { OgiPrismaModule } from '@app/ogi-prisma';
import { MasterModule } from './master/master.module';
import { SecModule } from './sec-bridge/sec.module';

@Module({
  imports: [OgiPrismaModule, MasterModule, SecModule],
  controllers: [DeclarantApiGatewayController],
  providers: [DeclarantApiGatewayService],
})
export class DeclarantApiGatewayModule {}
