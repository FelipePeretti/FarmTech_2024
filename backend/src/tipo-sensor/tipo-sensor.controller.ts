import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TipoSensorService } from './tipo-sensor.service';
import { TipoSensor } from './entities/tipo-sensor/tipo-sensor';

@Controller('tipo-sensor')
export class TipoSensorController {
  constructor(private readonly tipoSensorService: TipoSensorService) {}

  @Post()
  async create(@Body() tipoSensorData: TipoSensor): Promise<any> {
    return await this.tipoSensorService.create(tipoSensorData);
  }

  @Get()
  async findAll(): Promise<TipoSensor[]> {
    return await this.tipoSensorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.tipoSensorService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() tipoSensorData: TipoSensor,
  ): Promise<any> {
    return await this.tipoSensorService.update(+id, tipoSensorData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.tipoSensorService.remove(+id);
  }
}
