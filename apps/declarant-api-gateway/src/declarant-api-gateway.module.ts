import { Module } from '@nestjs/common';
import { MasterModule } from './master/master.module';
import { SecModule } from './sec-bridge/sec.module';
import { DirectExportJobOrderModule } from './direct-export-job-order/direct-export-job-order.module';

@Module({
  imports: [MasterModule, SecModule, DirectExportJobOrderModule],
  controllers: [],
  providers: [],
})
export class DeclarantApiGatewayModule {}
