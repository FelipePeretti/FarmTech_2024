import { Injectable } from '@nestjs/common';
import { Sensor } from './sensor.model';
import { Database } from 'src/infra/config';

@Injectable()
export class SensorService {
  private sensores: Sensor[] = [];

  constructor(private pool: Database) {}

  async listarSensores(): Promise<any[]> {
    const query =
      'select s.*, st.tipo as _tipoSensor from sensor s join sensor_tipo st on st.id = s.tipo_sensor_id';

    const result: any = await this.pool.query(query);

    return result;
  }

  inserirSensor(sensor: Sensor): void {
    this.sensores.push(sensor);
  }

  alterarSensor(id: number, novoSensor: Sensor): void {
    const index = this.sensores.findIndex((sensor) => sensor.id === id);

    if (index !== -1) {
      if (novoSensor._nomeSensor !== undefined) {
        this.sensores[index]._nomeSensor = novoSensor._nomeSensor;
      }
      if (novoSensor._localizacao !== undefined) {
        this.sensores[index]._localizacao = novoSensor._localizacao;
      }
      if (novoSensor._tipoSensor !== undefined) {
        this.sensores[index]._tipoSensor = novoSensor._tipoSensor;
      }
      if (novoSensor._dataInstalacao !== undefined) {
        this.sensores[index]._dataInstalacao = novoSensor._dataInstalacao;
      }
    }
  }

  removerSensor(id: number): void {
    this.sensores = this.sensores.filter((sensor) => sensor.id !== id);
  }
}
