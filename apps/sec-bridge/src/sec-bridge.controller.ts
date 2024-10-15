import { Controller, Get } from '@nestjs/common';
import { SecBridgeService } from './sec-bridge.service';

@Controller()
export class SecBridgeController {
  constructor(private readonly secBridgeService: SecBridgeService) {}

  @Get()
  getHello(): string {
    return this.secBridgeService.getHello();
  }
}
