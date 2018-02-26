import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents,LandingPageRoutingModule } from './landing-page-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ],
  declarations: [routedComponents],
  providers: []
})
export class LandingPageModule { }
