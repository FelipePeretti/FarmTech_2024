import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { SensorCreateComponent } from "../../components/sensor/sensor-create/sensor-create.component";
import { ReadSensorComponent } from "../../components/sensor/read-sensor/read-sensor.component";

@Component({
  selector: "app-crud",
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    SensorCreateComponent,
    ReadSensorComponent,
  ],
  templateUrl: "./crud.component.html",
  styleUrl: "./crud.component.css",
})
export class CrudComponent {
  constructor(private router: Router) {}

  navigateToSensorCreate(): void {
    this.router.navigate(["/sensor/create"]);
  }
}
