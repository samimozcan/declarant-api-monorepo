import { Test, TestingModule } from '@nestjs/testing';
import { SecBridgeController } from './sec-bridge.controller';
import { SecBridgeService } from './sec-bridge.service';

describe('SecBridgeController', () => {
  let secBridgeController: SecBridgeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecBridgeController],
      providers: [SecBridgeService],
    }).compile();

    secBridgeController = app.get<SecBridgeController>(SecBridgeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(secBridgeController.getHello()).toBe('Hello World!');
    });
  });
});
