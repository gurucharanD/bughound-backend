import { Program } from './../db/program.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramService {
    constructor(
        @InjectRepository(Program)
        private ProgramRepository: Repository<Program>,
    ) { }

    async create(program: any): Promise<any> {
        return await this.ProgramRepository.save(program);
    }

    async findAll(): Promise<Program[]> {
        return await this.ProgramRepository.find();
    }

    async findOne(id: number): Promise<Program> {
        return await this.ProgramRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<any> {
        return await this.ProgramRepository.delete(id);
    }

    async update(id: string, body: any): Promise<any> {
        return await this.ProgramRepository.createQueryBuilder().update(body).where({ id }).execute()
    }
}