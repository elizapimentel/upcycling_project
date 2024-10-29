import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MembersService {

  constructor(
    @InjectRepository(MemberEntity)
    private readonly membersRepository: Repository<MemberEntity>,
  ) {}

  async create(newMember: CreateMemberDto) {
    // add validação se o email já existe

    const member = this.membersRepository.create(newMember);

    return await this.membersRepository.save(member);
  }

  // findAll() {
  //   return `This action returns all members`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} member`;
  // }

  // update(id: number, updateMemberDto: UpdateMemberDto) {
  //   return `This action updates a #${id} member`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} member`;
  // }
}
