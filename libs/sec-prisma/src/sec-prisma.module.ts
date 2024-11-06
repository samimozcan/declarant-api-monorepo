import { Module } from '@nestjs/common';
import { SecPrismaService } from './sec-prisma.service';

@Module({
  providers: [SecPrismaService],
  exports: [SecPrismaService],
})
export class SecPrismaModule {}
