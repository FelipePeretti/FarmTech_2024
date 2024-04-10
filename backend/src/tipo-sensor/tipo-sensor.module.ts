import { Module } from '@nestjs/common';
import { TipoSensorService } from './tipo-sensor.service';
import { TipoSensorController } from './tipo-sensor.controller';
import { Database } from 'src/infra/config';

@Module({
  providers: [TipoSensorService, Database],
  controllers: [TipoSensorController],
})
export class TipoSensorModule {}
