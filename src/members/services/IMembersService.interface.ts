import { MemberSummary, TypeMember } from "../../common/enums/types-.register.enum";
import { CreateMemberDto } from "../dto/create-member.dto";
import { UpdateMemberDto } from "../dto/update-member.dto";
import { MemberEntity } from "../entities/member.entity";

export interface IMembersService {
    create(newMember: CreateMemberDto): Promise<MemberEntity>;
    findAllByMemberType(type: TypeMember): Promise<MemberSummary[]>;
    update(id: string, updateMemberDto: UpdateMemberDto): Promise<MemberEntity>;
}