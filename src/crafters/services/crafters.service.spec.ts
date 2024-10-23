import { Test, TestingModule } from '@nestjs/testing';
import { CraftersService } from './crafters.service';

describe('CraftersService', () => {
  let service: CraftersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CraftersService],
    }).compile();

    service = module.get<CraftersService>(CraftersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
