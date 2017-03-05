import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MediaService } from './services/index';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MediaService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
