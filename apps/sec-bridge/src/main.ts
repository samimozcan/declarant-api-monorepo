import { NestFactory } from '@nestjs/core';
import { SecBridgeModule } from './sec-bridge.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SecBridgeModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.ENV !== undefined ? 'sec-service' : 'localhost',
        port: 3002,
      },
    },
  );
  await app.listen();
}
bootstrap();
