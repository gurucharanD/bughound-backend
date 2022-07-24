import { EmployeeService } from './../services/employee.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    constructor(private service: EmployeeService) { }
    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: any) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() body: any) {
        return await this.service.create(body);
    }

    @Put(':id')
    async update(@Param('id') id: any, @Body() body: any) {
        return await this.service.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: any) {
        return await this.service.remove(id);
    }
}