import { Module } from '@nestjs/common';
import { ThriftStoresService } from './services/thrift_stores.service';
import { ThriftStoresController } from './controllers/thrift_stores.controller';

@Module({
  controllers: [ThriftStoresController],
  providers: [ThriftStoresService],
})
export class ThriftStoresModule {}
