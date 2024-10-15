import { Controller } from '@nestjs/common';
import { MasterService } from './master.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @MessagePattern('master.getHello')
  getHello(): string {
    return this.masterService.getHello();
  }

  @EventPattern('master.setHello')
  setHello(data: string) {
    this.masterService.setHello(data);
  }
}
