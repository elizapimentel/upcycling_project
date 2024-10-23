import { Test, TestingModule } from '@nestjs/testing';
import { ThriftStoresService } from './thrift_stores.service';

describe('ThriftStoresService', () => {
  let service: ThriftStoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThriftStoresService],
    }).compile();

    service = module.get<ThriftStoresService>(ThriftStoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
