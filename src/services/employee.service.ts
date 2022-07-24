import { Employee } from './../db/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private EmployeeRepository: Repository<Employee>,
    ) { }

    async create(employee: any): Promise<any> {
        return await this.EmployeeRepository.save(employee);
    }

    async findAll(): Promise<Employee[]> {
        return await this.EmployeeRepository.find();
    }

    async findOne(id: number): Promise<Employee> {
        return await this.EmployeeRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<any> {
        return await this.EmployeeRepository.delete(id);
    }

    async update(id: string, body: any): Promise<any> {
        return await this.EmployeeRepository.createQueryBuilder().update(body).where({ id }).execute()
    }
}