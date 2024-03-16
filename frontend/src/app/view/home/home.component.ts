import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatCardModule, RouterOutlet],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
