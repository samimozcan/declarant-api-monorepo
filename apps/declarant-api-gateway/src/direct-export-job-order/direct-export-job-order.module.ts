import { Module } from '@nestjs/common';
import { OgiPrismaModule } from '@app/ogi-prisma';
import { DirectExportJobOrderController } from './direct-export-job-order.controller';
import { DirectExportJobOrderService } from './direct-export-job-order.service';
import { MasterModule } from '../master/master.module';
import { SecModule } from '../sec-bridge/sec.module';

@Module({
  imports: [OgiPrismaModule, MasterModule, SecModule],
  controllers: [DirectExportJobOrderController],
  providers: [DirectExportJobOrderService],
})
export class DirectExportJobOrderModule {}
