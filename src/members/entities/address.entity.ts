import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'addresses' })
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    zip: string;
    @Column()
    street: string;
    @Column()
    neighborhood: string;
    @Column()
    city: string;
    @Column()
    state: string;
    @Column()
    number?: string;
}