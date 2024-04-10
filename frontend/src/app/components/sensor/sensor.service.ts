import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Sensor } from "./sensor.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { SensorTipo } from "./sensor-tipo.model";

@Injectable({
  providedIn: "root",
})
export class SensorService {
  baseUrl = "http://localhost:3000/sensor";
  baseUrl_tipo = "http://localhost:3000/tipo-sensor";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "Sair", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(this.baseUrl, sensor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.baseUrl);
  }

  readSensorTipo(): Observable<SensorTipo[]> {
    return this.http.get<SensorTipo[]>(this.baseUrl_tipo);
  }

  readById(id: string): Observable<Sensor> {
    const url = `${this.baseUrl}/${id}`;
    const sensor = this.http.get<Sensor>(url);
    return sensor;
  }

  update(sensor: Sensor): Observable<Sensor> {
    const url = `${this.baseUrl}/${sensor.id}`;
    return this.http.put<Sensor>(url, sensor);
  }

  delete(id: string): Observable<Sensor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Sensor>(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
