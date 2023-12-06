import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('trigger-job')
  async triggerJob() {
    await this.employeeService.triggerJob();
    return 'Job triggered successfully';
  }

  // @Get()
  // findAll() {
  //   return this.employeeService.findAll();
  // }

 
}
