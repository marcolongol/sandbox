import '@angular/localize/init';
import '@angular/compiler';

import { getTestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});

getTestBed().configureTestingModule({
  providers: [provideNoopAnimations()],
});
