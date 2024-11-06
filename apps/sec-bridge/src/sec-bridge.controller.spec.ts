import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { SecBridgeModule } from './../src/sec-bridge.module';

describe('SecBridgeController (e2e)', () => {
  let app: INestApplication;
  let client: ClientProxy;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        SecBridgeModule,
        ClientsModule.register([
          {
            name: 'SEC_SERVICE',
            transport: Transport.TCP,
            options: {
              host: process.env.ENV !== undefined ? 'sec-service' : 'localhost',
              port: 3002,
            },
          },
        ]),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    client = app.get('SEC_SERVICE');
    await client.connect();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should respond to sec.getHello message pattern', (done) => {
    client.send('sec.getHello', {}).subscribe((response) => {
      expect(response).toBe('Hello World!');
      done();
    });
  });

  it('should respond to sec.getHello message pattern', (done) => {
    client.send('sec.getHello', {}).subscribe((response) => {
      expect(response).toBe('Hello World!');
      done();
    });
  });

  it('should respond to sec.getHello message pattern', (done) => {
    client.send('sec.getHello', {}).subscribe((response) => {
      expect(response).toBe('Hello World!');
      done();
    });
  });

  it('should respond to sec.getHello message pattern', (done) => {
    client.send('sec.getHello', {}).subscribe((response) => {
      expect(response).toBe('Hello World!');
      done();
    });
  });
});
