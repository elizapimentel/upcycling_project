import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MembersService } from '../services/members.service';
import { CreateMemberDto } from '../dto/create-member.dto';
import { MemberSummary, TypeMember } from '../../common/enums/types-.register.enum';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  async create(@Body() member: CreateMemberDto) {
    return await this.membersService.create(member);
  }

  @Get(':type')
    async findAll(@Param('type') type: TypeMember): Promise<MemberSummary[]> {
        return await this.membersService.findAllByMemberType(type);
    }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.membersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
  //   return this.membersService.update(+id, updateMemberDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.membersService.remove(+id);
  // }
}
