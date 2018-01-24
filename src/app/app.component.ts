import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(){}
  ngOnInit(){ 
    //this.route.params.subscribe(id=> this.getDetails())
  }

  private getDetails(): void {
    console.log(this);
  }
}
