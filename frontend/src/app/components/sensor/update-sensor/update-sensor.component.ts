import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { Sensor } from "../sensor.model";
import { SensorService } from "../sensor.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SensorTipo } from "../sensor-tipo.model";
import { MatOption } from "@angular/material/core";
import { CommonModule } from "@angular/common";
import { MatSelect } from "@angular/material/select";

@Component({
  selector: "app-update-sensor",
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatOption,
    CommonModule,
    MatSelect,
  ],
  templateUrl: "./update-sensor.component.html",
  styleUrl: "./update-sensor.component.css",
})
export class UpdateSensorComponent implements OnInit {
  sensor: Sensor = {
    _nomeSensor: "",
    _localizacao: "",
    _tiposensor: "",
    _dataInstalacao: "",
  };

  sensorTipo: SensorTipo[] = [];

  constructor(
    private sensorService: SensorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.sensorService.readById(id!).subscribe((sensor) => {
      this.sensor = sensor;
    });

    this.sensorService
      .readSensorTipo()
      .subscribe((sensorTipo) => (this.sensorTipo = sensorTipo));
  }

  updateSensor(): void {
    this.sensorService.update(this.sensor).subscribe(() => {
      this.sensorService.showMessage("Alteração realizada com sucesso!");
      this.router.navigate(["/sensor"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/sensor"]);
  }
}
