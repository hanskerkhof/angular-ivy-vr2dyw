import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MuscleNumberComponent } from "./muscle-number/muscle-number.component";
import { MeasurementsService } from "./measurements.service";
import { TemperatureLabelPipe } from "./temperature-label.pipe";
import { TemparatureValuePipe } from "./temparature-value.pipe";

import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeNL from "@angular/common/locales/nl";

registerLocaleData(localeNL);

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    MuscleNumberComponent,
    TemperatureLabelPipe,
    TemparatureValuePipe,
    TemparatureValuePipe
  ],
  bootstrap: [AppComponent],
  providers: [MeasurementsService, { provide: LOCALE_ID, useValue: "nl-NL" }]
})
export class AppModule {}
