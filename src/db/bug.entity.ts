import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Bug {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    program: string;

    @Column()
    reportType: string;

    @Column()
    severity: string;

    @Column()
    problemSummary: string;

    @Column()
    reproducible: boolean;

    @Column()
    problem: string;

    @Column()
    suggestedFix: string;

    @OneToOne(() => Employee)
    @JoinColumn()
    reportedBy: number;

    @Column({ type: 'date' })
    reportedDate: string;

    @Column()
    functionalArea: string;

    @OneToOne(() => Employee)
    @JoinColumn()
    assignedTo: number;

    @Column()
    comments: string;

    @Column()
    status: string;

    @Column()
    priority: string;

    @Column()
    resolution: string;

    @Column()
    resolutionVersion: string;

    @OneToOne(() => Employee)
    @JoinColumn()
    resolvedBy: number;

    @Column({ type: 'date' })
    resolvedDate: string;

    @OneToOne(() => Employee)
    @JoinColumn()
    testedBy: number;

    @Column({ type: 'date' })
    testedDate: string;

    @Column()
    defered: boolean;
}