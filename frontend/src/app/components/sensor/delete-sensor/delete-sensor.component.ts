import { Component, OnInit } from "@angular/core";
import { SensorService } from "../sensor.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-delete-sensor",
  standalone: true,
  imports: [],
  templateUrl: "./delete-sensor.component.html",
  styleUrl: "./delete-sensor.component.css",
})
export class DeleteSensorComponent implements OnInit {
  constructor(
    private sensorService: SensorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.sensorService.delete(id!).subscribe(() => {
      this.sensorService.showMessage("Exclusão realizada com sucesso!");
      this.router.navigate(["/sensor"]);
    });
  }
}
