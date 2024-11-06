import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SecController } from './sec.controller';
import { SecService } from './sec.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SEC_SERVICE',
        transport: Transport.TCP,
        options: {
          host:
            process.env.NODE_ENV === 'production' ? 'sec-service' : 'localhost',
          port: 3002,
        },
      },
    ]),
  ],
  providers: [SecService],
  controllers: [SecController],
  exports: [SecService],
})
export class SecModule {}
