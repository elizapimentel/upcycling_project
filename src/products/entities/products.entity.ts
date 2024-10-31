import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { MemberEntity } from '../../members/entities/member.entity';
import { TypeProduct } from '../../common/enums/types-.register.enum';

@Entity({ name: 'products' })
export class ProductsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: TypeProduct,
    })
    productType: TypeProduct; 

    @Column({ nullable: true })
    price?: number; 

    @Column()
    contact: string; 

    @Column()
    createdAt: Date;

    @Column("simple-array")
    image: string[];

    @ManyToOne(() => MemberEntity, member => member.products)
    owner: MemberEntity; 
}
