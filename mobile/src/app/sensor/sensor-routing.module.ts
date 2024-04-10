import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorCreateComponent } from './sensor-create/sensor-create.component';
import { SensorReadComponent } from './sensor-read/sensor-read.component';

const routes: Routes = [
  {
    path: 'sensor/read',
    component: SensorReadComponent,
  },
  {
    path: 'sensor/create',
    component: SensorCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensorRoutingModule {}
