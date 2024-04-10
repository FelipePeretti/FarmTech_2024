import { Injectable } from '@nestjs/common';
import { Sensor } from './sensor.model';
import { Database } from 'src/infra/config';

@Injectable()
export class SensorService {
  constructor(private pool: Database) {}

  async listarSensores(): Promise<any[]> {
    const query =
      'select s.*, st.tipo as _tipoSensor from sensor s join sensor_tipo st on st.id = s.tipo_sensor_id ORDER BY st.id ASC;';

    const result: Sensor[] = await this.pool.query(query);

    return result;
  }

  async inserirSensor(sensor: Sensor): Promise<Sensor> {
    const query = `INSERT INTO public.sensor ("_nomeSensor", "_localizacao", tipo_sensor_id, "_dataInstalacao") VALUES('${sensor._nomeSensor}', '${sensor._localizacao}', ${parseInt(sensor._tiposensor)}, '${sensor._dataInstalacao}');`;
    const result: Sensor = await this.pool.query(query);

    return result;
  }

  async alterarSensor(id: number, novoSensor: Sensor): Promise<void> {
    const query = `UPDATE public.sensor SET "_nomeSensor"='${novoSensor._nomeSensor}', "_localizacao"='${novoSensor._localizacao}', tipo_sensor_id=${parseInt(novoSensor._tiposensor)}, "_dataInstalacao"='${novoSensor._dataInstalacao}' WHERE id=${id};`;
    return await this.pool.queryOnly(query);
  }

  async removerSensor(id: number): Promise<void> {
    const query = `DELETE FROM public.sensor WHERE id=${id};`;
    const result = await this.pool.query(query);
    return result;
  }

  async readById(id: number): Promise<Sensor> {
    const query = `SELECT s.*, s.tipo_sensor_id as _tipoSensor FROM public.sensor s WHERE id=${id} LIMIT 1;`;
    const result: Sensor = await this.pool.queryOne(query);
    return result;
  }
}
