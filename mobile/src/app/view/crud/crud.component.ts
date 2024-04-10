import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonContent, IonButton } from '@ionic/angular/standalone';
import { SensorReadComponent } from 'src/app/sensor/sensor-read/sensor-read.component';
import { Sensor } from 'src/app/sensor/sensor.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  sensors: Sensor[] = [
    // Aqui você pode inicializar a lista de sensores com alguns dados de exemplo
    {
      _nomeSensor: 'Sensor 1',
      _tiposensor: 'Tipo A',
      _localizacao: 'Sala 1',
      _dataInstalacao: '2024-04-07',
    },
    {
      _nomeSensor: 'Sensor 2',
      _tiposensor: 'Tipo B',
      _localizacao: 'Sala 2',
      _dataInstalacao: '2024-04-08',
    },
    {
      _nomeSensor: 'Sensor 3',
      _tiposensor: 'Tipo C',
      _localizacao: 'Sala 3',
      _dataInstalacao: '2024-04-09',
    },
    {
      _nomeSensor: 'Sensor 4',
      _tiposensor: 'Tipo C',
      _localizacao: 'Sala 3',
      _dataInstalacao: '2024-04-09',
    },
    {
      _nomeSensor: 'Sensor 5',
      _tiposensor: 'Tipo C',
      _localizacao: 'Sala 3',
      _dataInstalacao: '2024-04-09',
    },
  ];

  constructor(private router: Router) {}

  navigateToSensorCreate(): void {
    this.router.navigate(['/sensor/create']);
  }

  ngOnInit() {}
}
