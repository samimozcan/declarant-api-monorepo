import { Module } from '@nestjs/common';
import { SecBridgeController } from './sec-bridge.controller';
import { SecBridgeService } from './sec-bridge.service';
import { SecPrismaModule } from '@app/sec-prisma';

@Module({
  imports: [SecPrismaModule],
  controllers: [SecBridgeController],
  providers: [SecBridgeService],
})
export class SecBridgeModule {}
