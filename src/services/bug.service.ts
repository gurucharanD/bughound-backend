import { Bug } from './../db/bug.entity';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, createQueryBuilder, getRepository, Repository } from 'typeorm';

@Injectable()
export class BugService {
    constructor(
        @InjectRepository(Bug)
        private BugRepository: Repository<Bug>,
        @InjectConnection() private readonly connection: Connection
    ) { }

    async create(bug: any) {
        console.log(bug)
        let res = await this.BugRepository.save(bug);
        console.log(res)
        return res
    }

    async findAll(): Promise<Bug[]> {
        // return await this.BugRepository.find();
        return this.connection.query('SELECT * FROM bug;');

    }

    async findOne(id: number): Promise<Bug> {
        return await this.BugRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await await this.BugRepository.delete(id);
    }

    async update(id: string, body: any): Promise<any> {
        return await this.BugRepository.createQueryBuilder().update(body).where({ id }).execute()
    }
}