import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IRegister } from '../common/interfaces/IRegister';
import { AddressEntity } from './address.entity';

@Entity({ name: 'members' })
export class MemberEntity implements IRegister {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    fullName: string;

    @Column({ nullable: true })
    businessName?: string;

    @Column({ nullable: true })
    phone?: string;

    @Column()
    birth: Date;

    @Column(() => AddressEntity)
    address: AddressEntity;
    
    @Column("simple-array", {nullable: true })
    socialMedia?: string[];

}
