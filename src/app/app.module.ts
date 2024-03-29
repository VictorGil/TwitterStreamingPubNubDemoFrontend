import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetsListComponent } from './tweets-list/tweets-list.component';

import {ToTimeStringFromStringPipe} from './toTimeStringFromString.pipe';
import {ToTimeStringFromMillisPipe} from './toTimeStringFromMillis.pipe';

import { ConstructUrlPipe } from './constructUrl.pipe';

import { CountrySelectComponent } from './country-select/country-select.component';

// This import is required in order to avoid "Can't bind to 'formGroup' since it isn't a known property of 'form'"
// runtime error
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TweetsListComponent,
    ToTimeStringFromStringPipe,
    ToTimeStringFromMillisPipe,
    ConstructUrlPipe,
    CountrySelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
