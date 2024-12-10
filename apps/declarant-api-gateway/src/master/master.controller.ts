import { Controller, Get } from '@nestjs/common';
import { MasterService } from './master.service';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Get()
  async findAll() {
    console.log('master findAll');
    return await this.masterService.findAll();
  }

  @Get('just-hello')
  justHello() {
    return this.masterService.justHello();
  }
}
