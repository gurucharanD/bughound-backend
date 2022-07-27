import { BugService } from './services/bug.service';
import { Employee } from './db/employee.entity';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './db/area.entity';
import { Program } from './db/program.entity';
import { EmployeeController } from './controllers/employee.controller';
import { ProgramController } from './controllers/program.controller';
import { AreaController } from './controllers/area.controller';
import { ProgramService } from './services/program.service';
import { EmployeeService } from './services/employee.service';
import { AreaService } from './services/area.service';
import { Bug } from './db/bug.entity';
import { BugController } from './controllers/bug.controler';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'bughound',
      entities: [Employee, Area, Program, Bug],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Employee, Area, Program, Bug])
  ],
  controllers: [AppController, EmployeeController, ProgramController, AreaController, BugController],
  providers: [AppService, ProgramService, EmployeeService, AreaService, BugService],
})
export class AppModule { }
