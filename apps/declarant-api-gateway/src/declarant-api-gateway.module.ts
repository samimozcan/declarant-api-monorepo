import { Module } from '@nestjs/common';
import { DeclarantApiGatewayController } from './declarant-api-gateway.controller';
import { DeclarantApiGatewayService } from './declarant-api-gateway.service';
import { OgiPrismaModule } from '@app/ogi-prisma';
import { MasterModule } from './master/master.module';
import { MasterController } from './master/master.controller';
import { MasterPrismaModule } from '@app/master-prisma';

@Module({
  imports: [OgiPrismaModule, MasterModule, MasterPrismaModule],
  controllers: [DeclarantApiGatewayController, MasterController],
  providers: [DeclarantApiGatewayService],
})
export class DeclarantApiGatewayModule {}
