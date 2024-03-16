import { Component, OnInit } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { RouterOutlet, RouterLink } from "@angular/router";
import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "../../../view/home/home.component";
import { CrudComponent } from "../../../view/crud/crud.component";
import { SensorCreateComponent } from "../../sensor/sensor-create/sensor-create.component";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    RouterOutlet,
    CommonModule,
    CrudComponent,
    RouterLink,
    HomeComponent,
    SensorCreateComponent,
  ],
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.css",
})
export class NavComponent {
  timeString: String = "";

  constructor() {}
}
