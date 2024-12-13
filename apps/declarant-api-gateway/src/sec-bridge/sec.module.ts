import { Module } from '@nestjs/common';
import { SecController } from './sec.controller';
import { SecService } from './sec.service';

@Module({
  imports: [],
  providers: [SecService],
  controllers: [SecController],
  exports: [SecService],
})
export class SecModule {}
