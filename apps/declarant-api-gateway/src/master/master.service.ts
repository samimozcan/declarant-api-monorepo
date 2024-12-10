import { Inject, Injectable, Scope } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable({ scope: Scope.REQUEST })
export class MasterService {
  constructor(@Inject('MASTER_SERVICE') private masterService: ClientProxy) {}

  findAll(): Observable<string> {
    console.log('findAll');
    return this.masterService.send<string>('master.getHello', {});
  }

  justHello(): Observable<string> {
    console.log('justHello');
    return this.masterService.send<string>('master.justHello', {});
  }
}
