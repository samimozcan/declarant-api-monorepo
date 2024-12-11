import { Test, TestingModule } from '@nestjs/testing';
import { DirectImportJobOrderController } from './direct-import-job-order.controller';

describe('DirectImportJobOrderController', () => {
  let controller: DirectImportJobOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectImportJobOrderController],
    }).compile();

    controller = module.get<DirectImportJobOrderController>(DirectImportJobOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
