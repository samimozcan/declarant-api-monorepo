import { Controller } from '@nestjs/common';
import { MasterService } from './master.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @MessagePattern('master.getHello')
  getHello(): Promise<string> {
    return this.masterService.getHello();
  }

  @MessagePattern('master.justHello')
  justHello(): string {
    console.log('just hello in master controller');
    return 'Just hello';
  }

  @EventPattern('master.setHello')
  setHello(data: string) {
    this.masterService.setHello(data);
  }
}
