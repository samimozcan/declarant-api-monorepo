import { Module } from '@nestjs/common';
import { OgiPrismaModule } from '@app/ogi-prisma';
import { DirectExportJobOrderController } from './direct-export-job-order.controller';
import { DirectExportJobOrderService } from './direct-export-job-order.service';
import { SecModule } from '../sec-bridge/sec.module';
import { MasterModule } from '../master/master.module';

@Module({
  imports: [OgiPrismaModule, SecModule, MasterModule],
  controllers: [DirectExportJobOrderController],
  providers: [DirectExportJobOrderService],
})
export class DirectExportJobOrderModule {}
