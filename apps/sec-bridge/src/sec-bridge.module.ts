import { Module } from '@nestjs/common';
import { SecBridgeController } from './sec-bridge.controller';
import { SecBridgeService } from './sec-bridge.service';

@Module({
  imports: [],
  controllers: [SecBridgeController],
  providers: [SecBridgeService],
})
export class SecBridgeModule {}
