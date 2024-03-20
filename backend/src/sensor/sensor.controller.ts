import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SensorService } from './sensor.service';
import { Sensor } from './sensor.model';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Get()
  async listarSensores(): Promise<any[]> {
    return await this.sensorService.listarSensores();
  }

  @Post()
  inserirSensor(@Body() sensor: Sensor): void {
    this.sensorService.inserirSensor(sensor);
  }

  @Put(':id')
  alterarSensor(@Param('id') id: number, @Body() novoSensor: Sensor): void {
    this.sensorService.alterarSensor(+id, novoSensor);
  }

  @Delete(':id')
  removerSensor(@Param('id') id: number): void {
    this.sensorService.removerSensor(+id);
  }
}
