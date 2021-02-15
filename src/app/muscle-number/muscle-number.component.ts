import { Component, Input, OnInit } from "@angular/core";
import { Measurement, TemperatureUnitType, TemperatureUnitTypeEnum } from "../measurement";

@Component({
  selector: "app-muscle-number",
  templateUrl: "./muscle-number.component.html",
  styleUrls: ["./muscle-number.component.css"]
})
export class MuscleNumberComponent implements OnInit {
  @Input() measurement: Measurement;
  @Input() unitType: TemperatureUnitType = TemperatureUnitTypeEnum.celcius;

  constructor() {}

  ngOnInit() {}
}
