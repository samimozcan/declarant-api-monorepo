import { NestFactory } from '@nestjs/core';
import { SecBridgeModule } from './sec-bridge.module';

async function bootstrap() {
  const app = await NestFactory.create(SecBridgeModule);
  app.setGlobalPrefix(
    process.env.NODE_ENV === 'production' ? 'api' : 'api/v1-0',
  );
  await app.listen(4200);
}
bootstrap();
