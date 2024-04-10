import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from '../sensor.model';

@Component({
  selector: 'app-sensor-read',
  templateUrl: './sensor-read.component.html',
  styleUrls: ['./sensor-read.component.scss'],
})
export class SensorReadComponent implements OnInit {
  @Input() sensors: Sensor[] = [];
  constructor() {}

  ngOnInit() {}
}
