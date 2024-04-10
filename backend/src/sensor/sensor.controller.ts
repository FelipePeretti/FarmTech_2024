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

  @Get(':id')
  async getSensorByID(@Param('id') id: number): Promise<Sensor> {
    return await this.sensorService.readById(id);
  }

  @Post()
  async inserirSensor(@Body() sensor: Sensor): Promise<Sensor> {
    return await this.sensorService.inserirSensor(sensor);
  }

  @Put(':id')
  async alterarSensor(
    @Param('id') id: number,
    @Body() novoSensor: Sensor,
  ): Promise<void> {
    return await this.sensorService.alterarSensor(+id, novoSensor);
  }

  @Delete(':id')
  async removerSensor(@Param('id') id: number): Promise<void> {
    return await this.sensorService.removerSensor(+id);
  }
}
