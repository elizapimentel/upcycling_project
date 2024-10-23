import { Module } from '@nestjs/common';
import { CraftersController } from './controllers/crafters.controller';
import { CraftersService } from './services/crafters.service';

@Module({
  controllers: [CraftersController],
  providers: [CraftersService],
})
export class CraftersModule {}
