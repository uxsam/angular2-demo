import { Component, OnInit } from '@angular/core';
import {BaseDataService} from '../../model/base-data.service'
import { Observable } from 'rxjs/Observable';
import{Character} from '../../model/base-data.service'

@Component({
  selector: 'app-landing.main',
  templateUrl: './landing.main.component.html',
  styleUrls: ['./landing.main.component.css']
})
export class LandingMainComponent implements OnInit {
  characters:Character[];
  constructor(private charaterService:BaseDataService) { }

  ngOnInit() {
    console.log('i am alive');
    //get the service here and push into the component    
    this.charaterService.getConfig().subscribe(data => {console.log(data);this.characters=data});
  }
}
