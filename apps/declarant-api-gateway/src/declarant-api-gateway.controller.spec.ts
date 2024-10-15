import { Test, TestingModule } from '@nestjs/testing';
import { DeclarantApiGatewayController } from './declarant-api-gateway.controller';
import { DeclarantApiGatewayService } from './declarant-api-gateway.service';

describe('DeclarantApiGatewayController', () => {
  let declarantApiGatewayController: DeclarantApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DeclarantApiGatewayController],
      providers: [DeclarantApiGatewayService],
    }).compile();

    declarantApiGatewayController = app.get<DeclarantApiGatewayController>(
      DeclarantApiGatewayController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(declarantApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
