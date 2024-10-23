import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThriftStoresService } from './thrift_stores.service';
import { CreateThriftStoreDto } from './dto/create-thrift_store.dto';
import { UpdateThriftStoreDto } from './dto/update-thrift_store.dto';

@Controller('thrift-stores')
export class ThriftStoresController {
  constructor(private readonly thriftStoresService: ThriftStoresService) {}

  @Post()
  create(@Body() createThriftStoreDto: CreateThriftStoreDto) {
    return this.thriftStoresService.create(createThriftStoreDto);
  }

  @Get()
  findAll() {
    return this.thriftStoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thriftStoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThriftStoreDto: UpdateThriftStoreDto) {
    return this.thriftStoresService.update(+id, updateThriftStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thriftStoresService.remove(+id);
  }
}
