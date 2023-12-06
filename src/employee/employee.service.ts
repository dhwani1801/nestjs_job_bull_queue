import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class EmployeeService {
  constructor(@InjectQueue('sample') private readonly sampleQueue: Queue) {}

  async triggerJob() {
    await this.sampleQueue.add('storeDataInDatabase');
  }
}
