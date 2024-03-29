import { Pool } from 'pg';

export class Database {
  private pool: Pool;
  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'sensores',
      password: 'admin',
      port: 5432,
    });
  }

  async query(queryText: string, values?: any[]): Promise<any> {
    const client: any = await this.pool.connect();
    try {
      const result: any = await client.query(queryText, values);

      return result.rows;
    } catch (e) {
      console.log(e);
    } finally {
      client.release();
    }
  }

  async queryOnly(queryText: string, values?: any[]): Promise<void> {
    const client: any = await this.pool.connect();
    try {
      await client.query(queryText, values);
    } catch (e) {
      console.log(e);
    } finally {
      client.release();
    }
  }

  async queryOne(queryText: string, values?: any[]): Promise<any> {
    const client: any = await this.pool.connect();
    try {
      const result: any = await client.query(queryText, values);

      return result.rows[0];
    } catch (e) {
      console.log(e);
    } finally {
      client.release();
    }
  }
}
