import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingMainComponent } from './landing.main/landing.main.component';
import {LandingEditComponent} from './landing.edit/landing.edit.component';
import {LandingPageComponent  } from "./landing-page.component";


const routes: Routes = [
  {path:'',component: LandingPageComponent,children:[
    {path:'',component:LandingMainComponent },
    {path:':id',component:LandingEditComponent }
  ]}

  
 
];

export const routedComponents=[LandingMainComponent,LandingEditComponent,LandingPageComponent];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }


