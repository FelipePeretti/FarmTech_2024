import { Injectable } from '@nestjs/common';
import { TipoSensor } from './entities/tipo-sensor/tipo-sensor';
import { Database } from 'src/infra/config';

@Injectable()
export class TipoSensorService {
  constructor(private pool: Database) {}

  async create(tipoSensor: TipoSensor): Promise<void> {
    const query = `INSERT INTO public.sensor ("tipo") VALUES('${tipoSensor.tipo}');`;

    const result: any = await this.pool.query(query);
    return result;
  }

  async findAll(): Promise<TipoSensor[]> {
    const query = 'select * from public.sensor_tipo ORDER BY id ASC;';

    const result: TipoSensor[] = await this.pool.query(query);

    return result;
  }

  async findOne(id: number): Promise<any> {
    const query = `SELECT * FROM public.sensor_tipo WHERE id=${id} LIMIT 1;`;
    const result: any = await this.pool.queryOne(query);
    return result;
  }

  async update(id: number, tipoSensorData: TipoSensor): Promise<any> {
    const query = `UPDATE sensor_tipo SET "tipo"='${tipoSensorData.tipo}' WHERE id=${id};`;
    return await this.pool.queryOnly(query);
  }

  async remove(id: number): Promise<void> {
    const query = `DELETE FROM sensor_tipo WHERE id=${id};`;
    const result = await this.pool.query(query);
    return result;
  }
}
