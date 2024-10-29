import { CreateMemberDto } from "../dto/create-member.dto";
import { MemberEntity } from "../entities/member.entity";

export interface IMembersService {
    create(newMember: CreateMemberDto): Promise<MemberEntity>;
    findAll(): Promise<MemberEntity[]>;
}