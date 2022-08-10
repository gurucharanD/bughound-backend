import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Program {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: "", length: 500 })
    area: string;
}