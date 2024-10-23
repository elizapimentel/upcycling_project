import { Module } from '@nestjs/common';
import { DonorsService } from './services/donors.service';
import { DonorsController } from './controllers/donors.controller';

@Module({
  controllers: [DonorsController],
  providers: [DonorsService],
})
export class DonorsModule {}
