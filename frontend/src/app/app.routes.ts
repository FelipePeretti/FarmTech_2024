import { Routes } from "@angular/router";
import { HomeComponent } from "./view/home/home.component";
import { CrudComponent } from "./view/crud/crud.component";
import { SensorCreateComponent } from "./components/sensor/sensor-create/sensor-create.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "sensor",
    component: CrudComponent,
  },
  { path: "sensor/create", component: SensorCreateComponent },
];
