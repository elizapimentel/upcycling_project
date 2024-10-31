import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../entities/member.entity';
import { Repository } from 'typeorm';
import { IMembersService } from './IMembersService.interface';
import { AddressService } from '../../cepApi/services/address.service';
import { MemberSummary, TypeMember } from '../../common/enums/types-.register.enum';
import { UpdateMemberDto } from '../dto/update-member.dto';

@Injectable()
export class MembersService implements IMembersService {

  constructor(
    @InjectRepository(MemberEntity)
    private readonly membersRepository: Repository<MemberEntity>,
    private readonly addressService: AddressService,
  ) { }

  async create(newMember: CreateMemberDto) {
    if (newMember.email) {
      const member = await this.membersRepository.findOne({ where: { email: newMember.email } });
      if (member) {
        throw new Error('Member already exists');
      }
    }

    const address = await this.addressService.fetchAddressFromZipCode(newMember.zipCode);

    const savedAddress = await this.membersRepository.manager.save(address);

    const member = this.membersRepository.create({ ...newMember, address: savedAddress });

    return await this.membersRepository.save(member);
  }

  async findAllByMemberType(type: TypeMember): Promise<MemberSummary[]> {
    const members = await this.membersRepository.find({
      where: { memberType: type },
    });

    return members.map(({ fullName, businessName, memberType }) => ({
      fullName,
      businessName,
      memberType,
    })) as MemberSummary[];
  }

  async update(id: string, updateMemberDto: UpdateMemberDto): Promise<MemberEntity> {
    const member = await this.membersRepository.findOne({ where: { id } });

    if (!member) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }

    Object.assign(member, updateMemberDto);

    return await this.membersRepository.save(member);
  }

  async delete(id: string): Promise<void> {
    const member = await this.membersRepository.findOne({ where: { id } });

    if (!member) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }

    await this.membersRepository.remove(member);
  }
}
