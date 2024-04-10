import { NgModule } from '@angular/core';
import { CrudComponent } from './crud/crud.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TelemetriaComponent } from './telemetria/telemetria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sensores',
    component: CrudComponent,
  },
  {
    path: 'telemetria',
    component: TelemetriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
