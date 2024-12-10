import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MasterService {
  constructor(@Inject('MASTER_SERVICE') private masterService: ClientProxy) {}

  async findAll() {
    console.log('findAll');
    await this.masterService.connect();
    return this.masterService.send<string>('master.getHello', {});
  }

  async justHello() {
    console.log('justHello');
    return this.masterService.send<string>('master.justHello', {});
  }
}
