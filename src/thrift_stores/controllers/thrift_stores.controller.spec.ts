import { Test, TestingModule } from '@nestjs/testing';
import { ThriftStoresController } from './thrift_stores.controller';
import { ThriftStoresService } from './thrift_stores.service';

describe('ThriftStoresController', () => {
  let controller: ThriftStoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThriftStoresController],
      providers: [ThriftStoresService],
    }).compile();

    controller = module.get<ThriftStoresController>(ThriftStoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
