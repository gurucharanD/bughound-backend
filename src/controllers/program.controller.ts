import { ProgramService } from './../services/program.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('program')
export class ProgramController {
    constructor(private service: ProgramService) { }
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