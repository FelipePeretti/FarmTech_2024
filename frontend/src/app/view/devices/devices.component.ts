import { Component } from "@angular/core";
import { ReadSensorDevicesComponent } from "../../components/sensor/read-sensor-devices/read-sensor-devices.component";

@Component({
  selector: "app-devices",
  standalone: true,
  imports: [ReadSensorDevicesComponent],
  templateUrl: "./devices.component.html",
  styleUrl: "./devices.component.css",
})
export class DevicesComponent {}
