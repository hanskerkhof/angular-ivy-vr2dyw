export type TemperatureUnitType = "celcius" | "fahrenheit";

export interface Measurement {
  title: string;
  value: number;
  unit: TemperatureUnitType;
  dateTime: string;
}

export enum TemperatureUnitTypeEnum {
  celcius = 'celcius',
  fahrenheit = 'fahrenheit'
}
