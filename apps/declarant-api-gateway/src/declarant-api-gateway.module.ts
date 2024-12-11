import { Module } from '@nestjs/common';
import { MasterModule } from './master/master.module';
import { SecModule } from './sec-bridge/sec.module';
import { DirectExportJobOrderModule } from './direct-export-job-order/direct-export-job-order.module';
import { DirectImportJobOrderController } from './direct-import-job-order/direct-import-job-order.controller';

@Module({
  imports: [MasterModule, SecModule, DirectExportJobOrderModule],
  controllers: [DirectImportJobOrderController],
  providers: [],
})
export class DeclarantApiGatewayModule {}
