import { MemberEntity } from '../../members/entities/member.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';


@Entity({ name: 'addresses' })
export class AddressEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ name: 'cep' })
    zipCode: string;
    @Column({ name: 'logradouro' })
    street: string;
    @Column({ name: 'bairro' })
    neighborhood: string;
    @Column({ name: 'localidade' })
    city: string;
    @Column({ name: 'uf' })
    state: string;
    @OneToOne(() => MemberEntity, (member) => member.address, { onDelete: 'CASCADE' })
    member: MemberEntity;
}