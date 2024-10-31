import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../entities/member.entity';
import { Repository } from 'typeorm';
import { IMembersService } from './IMembersService.interface';
import { AddressService } from '../../cepApi/services/address.service';

@Injectable()
export class MembersService implements IMembersService {

  constructor(
    @InjectRepository(MemberEntity)
    private readonly membersRepository: Repository<MemberEntity>,
    private readonly addressService: AddressService,
  ) {}

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

  async findAll(): Promise<MemberEntity[]> {
    const members = await this.membersRepository.find();  
    
    return members;
  }

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
