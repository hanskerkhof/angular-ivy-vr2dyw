import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "temperatureLabel"
})
export class TemperatureLabelPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return `°${value}`;
  }
}
