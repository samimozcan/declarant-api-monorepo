import { Test, TestingModule } from '@nestjs/testing';
import { DirectExportJobOrderService } from './direct-export-job-order.service';

describe('DirectExportJobOrderService', () => {
  let service: DirectExportJobOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectExportJobOrderService],
    }).compile();

    service = module.get<DirectExportJobOrderService>(
      DirectExportJobOrderService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
