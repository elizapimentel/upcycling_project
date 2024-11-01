import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IRegister } from '../../common/interfaces/IRegister';
import { AddressEntity } from '../../cepApi/entities/address.entity';
import { TypeMember } from '../../common/enums/types-.register.enum';
import { ProductsEntity } from '../../products/entities/products.entity';
import * as bcrypt from 'bcrypt';

@Entity('members')
export class MemberEntity implements IRegister {
    @PrimaryGeneratedColumn('uuid', { name: 'memberId' })
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ name: 'full_name' })
    fullName: string;

    @Column({ nullable: true, name: 'business_name' })
    businessName?: string;

    @Column({ nullable: true })
    phone?: string;

    @Column({ name: 'cep' })
    zipCode: string;

    @OneToOne(() => AddressEntity, (address) => address.member)
    @JoinColumn()
    address: AddressEntity;

    @Column("simple-array", { nullable: true })
    socialMedia?: string[];

    @Column({
        type: 'enum',
        enum: TypeMember,
        name: 'member_type'
    })
    memberType: TypeMember;

    @OneToMany(() => ProductsEntity, product => product.owner)
    products: ProductsEntity[];

    @BeforeInsert()
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }

}
