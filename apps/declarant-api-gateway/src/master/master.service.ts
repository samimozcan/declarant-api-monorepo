import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MasterService {
  constructor(@Inject('MASTER_SERVICE') private masterService: ClientProxy) {}

  findAll() {
    return this.masterService.send('master.getHello', {});
  }
}
