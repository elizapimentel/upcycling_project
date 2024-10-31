import { Module } from '@nestjs/common';
import { MembersService } from './services/members.service';
import { MembersController } from './controllers/members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './entities/member.entity';
import { CepModule } from '../cepApi/cep.module';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [
    TypeOrmModule.forFeature([MemberEntity]),
    CepModule,
  ],
})
export class MembersModule {}
