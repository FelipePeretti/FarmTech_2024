import { Injectable } from "@nestjs/common";
import { Sensor } from "./sensor.model";

@Injectable()
export class SensorService{
    private sensores: Sensor[] = [];

    listarSensores(): Sensor[] {
        return this.sensores;
    }

    inserirSensor(sensor: Sensor): void{
        this.sensores.push(sensor);
    }

    alterarSensor(id: number, novoSensor: Sensor): void{
        const index = this.sensores.findIndex(sensor => sensor.id === id);

        if(index !== -1){
            if(novoSensor._nomeSensor !== undefined){
                this.sensores[index]._nomeSensor = novoSensor._nomeSensor;
            }
            if(novoSensor._localizacao !== undefined){
                this.sensores[index]._localizacao = novoSensor._localizacao;
            }
            if(novoSensor._tipoSensor !== undefined){
                this.sensores[index]._tipoSensor = novoSensor._tipoSensor;
            }
            if(novoSensor._dataInstalacao !== undefined){
                this.sensores[index]._dataInstalacao = novoSensor._dataInstalacao;
            }
        }
    }

    removerSensor(id: number): void{
        this.sensores = this.sensores.filter(sensor => sensor.  id !== id);
    }
}