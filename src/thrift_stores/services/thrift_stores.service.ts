import { Injectable } from '@nestjs/common';
import { CreateThriftStoreDto } from './dto/create-thrift_store.dto';
import { UpdateThriftStoreDto } from './dto/update-thrift_store.dto';

@Injectable()
export class ThriftStoresService {
  create(createThriftStoreDto: CreateThriftStoreDto) {
    return 'This action adds a new thriftStore';
  }

  findAll() {
    return `This action returns all thriftStores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thriftStore`;
  }

  update(id: number, updateThriftStoreDto: UpdateThriftStoreDto) {
    return `This action updates a #${id} thriftStore`;
  }

  remove(id: number) {
    return `This action removes a #${id} thriftStore`;
  }
}
