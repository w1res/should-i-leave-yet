import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaskedInputDirective } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { BingMapComponent } from './bing-map/bing-map.component';
import { RefreshIndicatorComponent } from './refresh-indicator/refresh-indicator.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';

@NgModule({
  declarations: [
    AppComponent,
    MaskedInputDirective,
    TimeEntryComponent,
    BingMapComponent,
    RefreshIndicatorComponent,
    TitleComponent,
    SubtitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
