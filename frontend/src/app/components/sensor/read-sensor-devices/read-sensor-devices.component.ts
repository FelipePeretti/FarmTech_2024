import { NgFor } from "@angular/common";
import { SensorService } from "../sensor.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { Sensor } from "../sensor.model";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

interface Telemetry {
  value: number;
  timestamp: string;
}

@Component({
  selector: "app-read-sensor-devices",
  standalone: true,
  imports: [
    MatCardModule,
    NgFor,
    MatButtonModule,
    RouterModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: "./read-sensor-devices.component.html",
  styleUrl: "./read-sensor-devices.component.css",
})
export class ReadSensorDevicesComponent implements OnInit {
  sensors: Sensor[] = [];
  telemetryList: any[] = [];
  selectedSensor: any;

  @ViewChild("telemetryPanel") telemetryPanel:
    | ElementRef<HTMLDivElement>
    | undefined;

  displayedColumns = ["_nomeSensor", "_localizacao", "_tiposensor"];

  constructor(private SensorService: SensorService) {}

  ngOnInit(): void {
    this.SensorService.read().subscribe((sensors) => (this.sensors = sensors));
  }

  openTelemetryList(sensor: Sensor) {
    this.selectedSensor = sensor;
    this.telemetryList = [];
    this.simulateTelemetryData();
  }

  simulateTelemetryData() {
    setInterval(() => {
      if (this.selectedSensor) {
        const newTelemetry: Telemetry = {
          value: Math.random() * 100,
          timestamp: new Date().toISOString(),
        };
        this.telemetryList.push(newTelemetry);
      }
    }, 5000);
  }
  scrollToBottom() {
    if (this.telemetryPanel && this.telemetryPanel.nativeElement) {
      this.telemetryPanel.nativeElement.scrollTop =
        this.telemetryPanel.nativeElement.scrollHeight;
    }
  }
}
