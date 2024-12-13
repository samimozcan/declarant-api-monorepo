import { NestFactory } from '@nestjs/core';
import { DeclarantApiGatewayModule } from './declarant-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(DeclarantApiGatewayModule);
  app.setGlobalPrefix(
    process.env.NODE_ENV === 'production' ? 'api' : 'api/v2-0',
  );
  await app.listen(3000);
}
bootstrap();
