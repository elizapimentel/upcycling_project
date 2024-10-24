import { Module } from '@nestjs/common';
import { MembersService } from './services/members.service';
import { MembersController } from './controllers/members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './entities/member.entity';
import { AddressEntity } from './entities/address.entity';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [
    TypeOrmModule.forFeature([MemberEntity, AddressEntity]),
  ],
})
export class MembersModule {}
