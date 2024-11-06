import { Controller } from '@nestjs/common';
import { SecBridgeService } from './sec-bridge.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SecBridgeController {
  constructor(private readonly secBridgeService: SecBridgeService) {}

  @MessagePattern('sec.getHello')
  async getHello(): Promise<string> {
    return this.secBridgeService.getHello();
  }
}
