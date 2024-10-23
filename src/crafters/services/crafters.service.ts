import { Injectable } from '@nestjs/common';
import { CreateCrafterDto } from '../dto/create-crafter.dto';
import { UpdateCrafterDto } from '../dto/update-crafter.dto';

@Injectable()
export class CraftersService {
  create(createCrafterDto: CreateCrafterDto) {
    return 'This action adds a new crafter';
  }

  findAll() {
    return `This action returns all crafters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crafter`;
  }

  update(id: number, updateCrafterDto: UpdateCrafterDto) {
    return `This action updates a #${id} crafter`;
  }

  remove(id: number) {
    return `This action removes a #${id} crafter`;
  }
}
