import { Controller, Get } from '@nestjs/common';
import { SecService } from './sec.service';

@Controller('sec')
export class SecController {
  constructor(private readonly SecService: SecService) {}

  @Get()
  findAll() {
    return this.SecService.findAll();
  }

  @Get('getHello')
  justHello() {
    return this.SecService.justHello();
  }
}
