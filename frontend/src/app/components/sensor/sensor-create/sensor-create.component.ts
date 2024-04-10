import { Sensor } from "../sensor.model";
import { SensorService } from "../sensor.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatOption } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSelect } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { SensorTipo } from "../sensor-tipo.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sensor-create",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatOption,
    MatSelect,
    CommonModule,
  ],
  templateUrl: "./sensor-create.component.html",
  styleUrl: "./sensor-create.component.css",
})
export class SensorCreateComponent implements OnInit {
  sensor: Sensor = {
    _nomeSensor: "",
    _localizacao: "",
    _tiposensor: "",
    _dataInstalacao: "",
  };

  sensorTipo: SensorTipo[] = [];

  constructor(private sensorService: SensorService, private router: Router) {}

  ngOnInit(): void {
    this.sensorService
      .readSensorTipo()
      .subscribe((sensorTipo) => (this.sensorTipo = sensorTipo));
  }

  createSensor(): void {
    this.sensorService.create(this.sensor).subscribe(() => {
      this.sensorService.showMessage("Operação realizada com sucesso.");
      this.router.navigate(["/sensor"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/sensor"]);
  }
}
