import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import * as fs from 'fs';

@Processor('sample')
export class SampleJobProcessor {
  constructor(
    @InjectRepository(Employee)
    private readonly personRepository: Repository<Employee>,
  ) {}

  @Process('storeDataInDatabase')
  async storeDataInDatabase(job: Job) {
    try {
      const rawData = fs.readFileSync('data.json', 'utf8');
      const data = JSON.parse(rawData);

      for (const item of data) {
        const person = this.personRepository.create(item);
        await this.personRepository.save(person);
      }

      console.log('Data stored in the database successfully');
    } catch (error) {
      console.error('Error storing data in the database', error);
    }
  }
}
