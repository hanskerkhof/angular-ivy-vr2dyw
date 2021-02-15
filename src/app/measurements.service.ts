import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Measurement } from "./measurement";

@Injectable()
export class MeasurementsService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>("/assets/measurements.json");
  }
}
