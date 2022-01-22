import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnalyzeComponent } from './analyze/analyze.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrichComponent } from './enrich/enrich.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyzeComponent,
    EnrichComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
