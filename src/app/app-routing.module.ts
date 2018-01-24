import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';



/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
 
  { path: 'dashboard', loadChildren: 'app/landing-page/landing-page.module#LandingPageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true,preloadingStrategy: PreloadAllModules  })],
  exports: [RouterModule],  
})
export class AppRoutingModule { }