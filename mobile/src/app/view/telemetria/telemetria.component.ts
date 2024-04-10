import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MQTTService } from 'src/app/sensor/mqtt.service';

@Component({
  selector: 'app-telemetria',
  templateUrl: './telemetria.component.html',
  styleUrls: ['./telemetria.component.scss'],
})
export class TelemetriaComponent implements OnInit {
  public umidade: number = 0;
  public temperatura: number = 0;
  public timestamp: String = '';

  private _mqttClient: any;

  public temperaturaEmitter$ = new BehaviorSubject<number>(this.temperatura);

  private MQTT_CONFIG: {
    host: string;
    port: number;
    clientId: string;
  } = {
    host: 'iot.plug.farm',
    port: 9001,
    clientId: 'app_12345',
  };

  private TOPIC: string[] = ['sensor/cozinha'];

  constructor(private mqttService: MQTTService) {}
  ngOnInit() {
    this._mqttClient = this.mqttService.loadingMqtt(
      this._onConnectionLost,
      this._onMessageArrived,
      this.TOPIC,
      this.MQTT_CONFIG,
      this
    );
  }

  private _onConnectionLost(responseObject: any) {
    // connection listener
    // ...do actions when connection lost
    console.log('_onConnectionLost', responseObject);
  }

  private _onMessageArrived(message: any) {
    // message listener
    // ...do actions with arriving message
    console.log('message', message.payloadString);
    let msgObj = JSON.parse(message.payloadString);
    console.log(msgObj);
    this.temperatura = msgObj['temperatura'];
    this.umidade = msgObj['umidade'];
    this.timestamp = msgObj['timestamp'];
  }
}
