import { NestFactory } from '@nestjs/core';
import { MasterModule } from './master.module';

async function bootstrap() {
  const app = await NestFactory.create(MasterModule);
  app.setGlobalPrefix(
    process.env.NODE_ENV === 'production' ? 'api' : 'api/v1-0',
  );
  await app.listen(4001);
}
bootstrap();
