import { MemberEntity } from "../../members/entities/member.entity";

export enum TypeProduct {
    DONATION = 'donation',
    SALE = 'sale',
}

export enum TypeMember {
    DONOR = 'donor',
    ARTISAN = 'artisan',
    SHOP_OWNER = 'shop_owner',
}

export type MemberWithoutPassword = Omit<MemberEntity, 'password' | 'hashPassword' | 'comparePassword'>;

export type MemberSummary = Pick<MemberEntity, 'fullName' | 'businessName' | 'memberType'>;