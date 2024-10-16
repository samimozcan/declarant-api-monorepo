import { Controller, Get } from '@nestjs/common';
import { DeclarantApiGatewayService } from './declarant-api-gateway.service';

@Controller()
export class DeclarantApiGatewayController {
  constructor(
    private readonly declarantApiGatewayService: DeclarantApiGatewayService,
  ) {}

  @Get()
  getHello(): string {
    return this.declarantApiGatewayService.getHello();
  }
}
