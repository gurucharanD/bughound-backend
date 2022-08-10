import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Area } from './area.entity';
import { Employee } from './employee.entity';
import { Program } from './program.entity';

@Entity()
export class Bug {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Program)
    @JoinColumn()
    program: number;

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

    @ManyToOne(() => Employee)
    @JoinColumn()
    reportedBy: number;

    @Column({ type: 'date' })
    reportedDate: string;

    @Column()
    functionalArea: string;

    @ManyToOne(() => Employee)
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

    @ManyToOne(() => Employee)
    @JoinColumn()
    resolvedBy: number;

    @Column({ type: 'date' })
    resolvedDate: string;

    @ManyToOne(() => Employee)
    @JoinColumn()
    testedBy: number;

    @Column({ type: 'date' })
    testedDate: string;

    @Column()
    defered: boolean;
}