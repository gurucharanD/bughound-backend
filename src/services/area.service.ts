import { Area } from './../db/area.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AreaService {
    constructor(
        @InjectRepository(Area)
        private AreaRepository: Repository<Area>,
    ) { }

    async create(area: any) {
        return await this.AreaRepository.create(area);
    }

    async findAll(): Promise<Area[]> {
        return await this.AreaRepository.find();
    }

    async findOne(id: number): Promise<Area> {
        return await this.AreaRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await await this.AreaRepository.delete(id);
    }

    async update(id: string, body: any): Promise<any> {
        return await this.AreaRepository.createQueryBuilder().update(body).where({ id }).execute()
    }
}