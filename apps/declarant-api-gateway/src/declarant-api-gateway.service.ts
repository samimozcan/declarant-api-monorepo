import { Injectable } from '@nestjs/common';

@Injectable()
export class DeclarantApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
