import { Controller, Get, Post, Body, Param, Put, Delete, Inject } from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { MemberSummary, TypeMember } from '../../common/enums/types-.register.enum';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { IMembersService } from '../services/IMembersService.interface';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('members')
@Controller('members')
export class MembersController {
  constructor(
    @Inject(IMembersService)
    private readonly membersService: IMembersService
  ) { }

  @Post()
  @ApiOperation({ summary: 'Create a new member' })
  @ApiResponse({ status: 201, description: 'Member successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiBody({ type: CreateMemberDto })
  async create(@Body() member: CreateMemberDto) {
    return await this.membersService.create(member);
  }

  @Get(':type')
  @ApiOperation({ summary: 'Get all members by type' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved members.'})
  @ApiParam({ name: 'type', description: 'The type of members to retrieve', enum: TypeMember })
  @ApiResponse({ status: 404, description: 'No members found for this type.' })
  async findAll(@Param('type') type: TypeMember): Promise<MemberSummary[]> {
    return await this.membersService.findAllByMemberType(type);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a member' })
  @ApiParam({ name: 'id', description: 'ID of the member to update' })
  @ApiResponse({ status: 200, description: 'Member updated successfully.' })
  @ApiResponse({ status: 404, description: 'Member not found.' })
  @ApiBody({ type: UpdateMemberDto })
  async update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return await this.membersService.update(id, updateMemberDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a member' })
  @ApiParam({ name: 'id', description: 'ID of the member to delete' })
  @ApiResponse({ status: 200, description: 'Member deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Member not found.' })
    async delete(@Param('id') id: string) {
        await this.membersService.delete(id);
        return { message: `Member deleted successfully` };
    }
}
