import { PartialType } from '@nestjs/mapped-types';
import { CreateThriftStoreDto } from './create-thrift_store.dto';

export class UpdateThriftStoreDto extends PartialType(CreateThriftStoreDto) {}
