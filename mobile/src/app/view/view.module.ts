import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SensorModule } from '../sensor/sensor.module';
import { CrudComponent } from './crud/crud.component';
import { ViewRoutingModule } from './view-routing.module';
import { HomeComponent } from './home/home.component';
import { TelemetriaComponent } from './telemetria/telemetria.component';

@NgModule({
  declarations: [CrudComponent, HomeComponent, TelemetriaComponent],
  exports: [CrudComponent, HomeComponent, TelemetriaComponent],

  imports: [CommonModule, IonicModule, SensorModule, ViewRoutingModule],
})
export class ViewModule {}
