import { NestFactory } from '@nestjs/core';
import { DeclarantApiGatewayModule } from './declarant-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(DeclarantApiGatewayModule);
  await app.listen(3000);
}
bootstrap();
