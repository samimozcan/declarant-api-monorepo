import { Module } from '@nestjs/common';
import { DeclarantApiGatewayController } from './declarant-api-gateway.controller';
import { DeclarantApiGatewayService } from './declarant-api-gateway.service';
import { OgiPrismaModule } from '@app/ogi-prisma';
import { MasterModule } from './master/master.module';
import { SecModule } from './sec-bridge/sec.module';
import { DirectExportJobOrderController } from './direct-export-job-order/direct-export-job-order.controller';
import { DirectExportJobOrderService } from './direct-export-job-order/direct-export-job-order.service';

@Module({
  imports: [OgiPrismaModule, MasterModule, SecModule],
  controllers: [DeclarantApiGatewayController, DirectExportJobOrderController],
  providers: [DeclarantApiGatewayService, DirectExportJobOrderService],
})
export class DeclarantApiGatewayModule {}
