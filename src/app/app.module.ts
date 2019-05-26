import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetsListComponent } from './tweets-list/tweets-list.component';

import {ToTimeStringFromStringPipe} from './toTimeStringFromString.pipe';
import {ToTimeStringFromMillisPipe} from './toTimeStringFromMillis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TweetsListComponent,
    ToTimeStringFromStringPipe,
    ToTimeStringFromMillisPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
