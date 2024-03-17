import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink } from "@angular/router";
import { MatCardAvatar } from "@angular/material/card";
import { MatCardModule } from "@angular/material/card";
import { MatCardHeader } from "@angular/material/card";
import { MatIconAnchor } from "@angular/material/button";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink,
    MatCardAvatar,
    MatCardModule,
    MatCardHeader,
    MatIconAnchor,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {}
