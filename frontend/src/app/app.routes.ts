import { Routes } from "@angular/router";
import { HomeComponent } from "./view/home/home.component";
import { CrudComponent } from "./view/crud/crud.component";
import { SensorCreateComponent } from "./components/sensor/sensor-create/sensor-create.component";
import { UpdateSensorComponent } from "./components/sensor/update-sensor/update-sensor.component";
import { DeleteSensorComponent } from "./components/sensor/delete-sensor/delete-sensor.component";
import { DevicesComponent } from "./view/devices/devices.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "sensor",
    component: CrudComponent,
  },
  { path: "sensor/create", component: SensorCreateComponent },
  { path: "sensor/update/:id", component: UpdateSensorComponent },
  { path: "sensor/delete/:id", component: DeleteSensorComponent },
  { path: "devices", component: DevicesComponent },
];
