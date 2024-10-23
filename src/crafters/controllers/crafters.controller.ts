import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CraftersService } from './crafters.service';
import { CreateCrafterDto } from '../dto/create-crafter.dto';
import { UpdateCrafterDto } from '../dto/update-crafter.dto';

@Controller('crafters')
export class CraftersController {
  constructor(private readonly craftersService: CraftersService) {}

  @Post()
  create(@Body() createCrafterDto: CreateCrafterDto) {
    return this.craftersService.create(createCrafterDto);
  }

  @Get()
  findAll() {
    return this.craftersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.craftersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrafterDto: UpdateCrafterDto) {
    return this.craftersService.update(+id, updateCrafterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.craftersService.remove(+id);
  }
}
