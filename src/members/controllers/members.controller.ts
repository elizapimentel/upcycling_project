import { Controller, Get, Post, Body, Param, Put, Delete, Inject } from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { MemberSummary, TypeMember } from '../../common/enums/types-.register.enum';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { IMembersService } from '../services/IMembersService.interface';

@Controller('members')
export class MembersController {
  constructor(
    @Inject(IMembersService)
    private readonly membersService: IMembersService
  ) { }

  @Post()
  async create(@Body() member: CreateMemberDto) {
    return await this.membersService.create(member);
  }

  @Get(':type')
  async findAll(@Param('type') type: TypeMember): Promise<MemberSummary[]> {
    return await this.membersService.findAllByMemberType(type);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return await this.membersService.update(id, updateMemberDto);
  }

  @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.membersService.delete(id);
        return { message: `Member deleted successfully` };
    }
}
