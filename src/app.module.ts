import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CraftersModule } from './crafters/crafters.module';
import { ThriftStoresModule } from './thrift_stores/thrift_stores.module';
import { DonorsModule } from './donors/donors.module';

@Module({
  imports: [CraftersModule, ThriftStoresModule, DonorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
