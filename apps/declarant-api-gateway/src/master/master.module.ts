import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterController } from './master.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MASTER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.ENV !== undefined ? 'master-service' : 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  providers: [MasterService],
  controllers: [MasterController],
  exports: [MasterService],
})
export class MasterModule {}
