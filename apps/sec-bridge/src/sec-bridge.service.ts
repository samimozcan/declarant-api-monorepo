import { Injectable } from '@nestjs/common';

@Injectable()
export class SecBridgeService {
  getHello(): string {
    return 'Hello World!';
  }
}
