import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { SampleJobProcessor } from './employee.job';
import { BullModule } from '@nestjs/bull';
import { Employee } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    BullModule.registerQueue({
      name: 'sample',
    }),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService , SampleJobProcessor],
})
export class EmployeeModule {}
