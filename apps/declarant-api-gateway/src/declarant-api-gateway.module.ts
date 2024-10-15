import { Module } from '@nestjs/common';
import { DeclarantApiGatewayController } from './declarant-api-gateway.controller';
import { DeclarantApiGatewayService } from './declarant-api-gateway.service';
import { MasterModule } from './master/master.module';

@Module({
  imports: [MasterModule],
  controllers: [DeclarantApiGatewayController],
  providers: [DeclarantApiGatewayService],
})
export class DeclarantApiGatewayModule {}
