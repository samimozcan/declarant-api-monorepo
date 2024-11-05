import { Module } from '@nestjs/common';
import { OgiPrismaService } from './ogi-prisma.service';

@Module({
  providers: [OgiPrismaService],
  exports: [OgiPrismaService],
})
export class OgiPrismaModule {}
