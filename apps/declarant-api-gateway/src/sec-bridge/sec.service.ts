import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SecService {
  constructor(@Inject('SEC_SERVICE') private secService: ClientProxy) {}

  async findAll() {
    return this.secService.send('sec.getHello', {});
  }

  async justHello() {
    console.log('justHello');
    return this.secService.send<string>('sec.getHello', {});
  }
}
