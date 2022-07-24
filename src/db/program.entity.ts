import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Program {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}