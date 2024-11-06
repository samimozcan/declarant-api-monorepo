import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SecService {
  constructor(@Inject('SEC_SERVICE') private secService: ClientProxy) {}

  findAll() {
    return this.secService.send('sec.getHello', {});
  }

  justHello() {
    console.log('justHello');
    return this.secService.send<string>('sec.getHello', {});
  }
}
