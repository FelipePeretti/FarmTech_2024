import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { HttpClient, provideHttpClient } from "@angular/common/http";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import {
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS,
  provideNativeDateAdapter,
} from "@angular/material/core";

export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY",
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MM/YYYY",
    dateA11yLabel: "DD/MM/YYYY",
    monthYearA11yLabel: "MM/YYYY",
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideNativeDateAdapter(),
    // Define a localidade para português brasileiro
    { provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
    // Usa os formatos de data para português brasileiro
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
};
