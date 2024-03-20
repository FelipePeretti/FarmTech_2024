import { Module } from '@nestjs/common';
import { SensorController } from './sensor.controller';
import { SensorService } from './sensor.service';
import { Database } from 'src/infra/config';

@Module({
  controllers: [SensorController],
  providers: [SensorService, Database],
})
export class SensorModule {}
