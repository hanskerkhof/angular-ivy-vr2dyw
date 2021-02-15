import { Pipe, PipeTransform } from "@angular/core";
import { TemperatureUnitType, TemperatureUnitTypeEnum } from "./measurement";

@Pipe({
  name: "temparatureValue"
})
export class TemparatureValuePipe implements PipeTransform {
  transform(value: number, unitType: TemperatureUnitType): number {
    if (unitType === TemperatureUnitTypeEnum.celcius) {
      return value;
    } else {
      return (value * 9) / 5 + 32;
    }
  }
}
