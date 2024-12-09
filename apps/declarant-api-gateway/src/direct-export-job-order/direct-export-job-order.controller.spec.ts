import { Test, TestingModule } from '@nestjs/testing';
import { DirectExportJobOrderController } from './direct-export-job-order.controller';

describe('DirectExportJobOrderController', () => {
  let controller: DirectExportJobOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectExportJobOrderController],
    }).compile();

    controller = module.get<DirectExportJobOrderController>(
      DirectExportJobOrderController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
