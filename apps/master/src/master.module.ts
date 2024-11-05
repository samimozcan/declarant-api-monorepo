import { Module } from '@nestjs/common';
import { MasterController } from './master.controller';
import { MasterService } from './master.service';
import { MasterPrismaModule } from '@app/master-prisma';

@Module({
  imports: [MasterPrismaModule],
  controllers: [MasterController],
  providers: [MasterService],
})
export class MasterModule {}
