import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetsListComponent } from './tweets-list/tweets-list.component';

import {ToTimeStringPipe} from './toTimeString.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TweetsListComponent,
    ToTimeStringPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
