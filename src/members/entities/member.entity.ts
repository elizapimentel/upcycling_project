import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IRegister } from '../../common/interfaces/IRegister';
import { AddressEntity } from './address.entity';
import { TypeMember } from '../../common/enums/types-.register.enum';
import { ProductsEntity } from '../../products/entities/products.entity';
import * as bcrypt from 'bcrypt';

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

    @Column({
        type: 'enum',
        enum: TypeMember,
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
