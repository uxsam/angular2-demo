import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './shared/counter/counter.component';
import {HttpClientModule} from '@angular/common/http'
import { BaseDataService } from "./model/base-data.service";
import { LandingPageModule } from "./landing-page/landing-page.module";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,LandingPageModule
  ],
  providers: [BaseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
