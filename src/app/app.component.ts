import { Component } from '@angular/core';
import { ActivatedRoute,Router,NavigationEnd } from "@angular/router";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CounterComponent  } from "./shared/counter/counter.component";
import {filter} from   'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private route: ActivatedRoute,private router:Router){}
  ngOnInit(){ 
    this.route.params.subscribe(id=> this.getDetails());
 
   
  }
  private getDetails(): void { 
    console.log(this);
  }
}
