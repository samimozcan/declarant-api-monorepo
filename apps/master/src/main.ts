import { NestFactory } from '@nestjs/core';
import { MasterModule } from './master.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MasterModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.ENV !== undefined ? 'master-service' : 'localhost',
        port: 3001,
      },
    },
  );
  await app.listen();
}
bootstrap();
