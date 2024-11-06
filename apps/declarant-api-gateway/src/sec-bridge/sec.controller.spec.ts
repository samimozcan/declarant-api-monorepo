import { Test, TestingModule } from '@nestjs/testing';
import { SecController } from './sec.controller';

describe('SecController', () => {
  let controller: SecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecController],
    }).compile();

    controller = module.get<SecController>(SecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
