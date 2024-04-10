import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SensorCreateComponent } from './sensor-create/sensor-create.component';
import { SensorReadComponent } from './sensor-read/sensor-read.component';
import { SensorRoutingModule } from './sensor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SensorRoutingModule,
  ],
  declarations: [SensorCreateComponent, SensorReadComponent],
  exports: [SensorCreateComponent, SensorReadComponent],
})
export class SensorModule {}
