import { Component, OnInit } from "@angular/core";
import { SensorService } from "../sensor.service";
import { MatTable, MatTableModule } from "@angular/material/table";
import { NgFor } from "@angular/common";
import { Sensor } from "../sensor.model";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-read-sensor",
  standalone: true,
  imports: [
    MatTable,
    MatTableModule,
    NgFor,
    MatButtonModule,
    RouterModule,
    DatePipe,
  ],
  templateUrl: "./read-sensor.component.html",
  styleUrl: "./read-sensor.component.css",
})
export class ReadSensorComponent implements OnInit {
  sensors: Sensor[] = [];

  displayedColumns = [
    "id",
    "_nomeSensor",
    "_localizacao",
    "_tiposensor",
    "_dataInstalacao",
    "update",
    "delete",
  ];

  constructor(private SensorService: SensorService) {}

  ngOnInit(): void {
    this.SensorService.read().subscribe((sensors) => (this.sensors = sensors));
  }
}
