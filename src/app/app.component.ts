import { Component, OnInit, VERSION } from "@angular/core";
import { Measurement, TemperatureUnitType, TemperatureUnitTypeEnum } from "./measurement";
import { MeasurementsService } from "./measurements.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  public measurements: Measurement[];
  public unitType: TemperatureUnitType = TemperatureUnitTypeEnum.celcius;
  public TemperatureUnitTypeEnum = TemperatureUnitTypeEnum;

  constructor(private service: MeasurementsService) {}

  ngOnInit() {
    this.service.getData().subscribe((result: any) => {
      this.measurements = result;
    });
  }

  public setUnitType(unitType: TemperatureUnitType) {
    this.unitType = unitType;
  }
}
