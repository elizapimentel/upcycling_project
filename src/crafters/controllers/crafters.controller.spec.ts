import { Test, TestingModule } from '@nestjs/testing';
import { CraftersController } from './crafters.controller';
import { CraftersService } from './crafters.service';

describe('CraftersController', () => {
  let controller: CraftersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CraftersController],
      providers: [CraftersService],
    }).compile();

    controller = module.get<CraftersController>(CraftersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
