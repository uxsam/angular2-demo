import { Component, OnInit } from '@angular/core';

@Component({
    template:'<div style="border:1px solid red;" >Hi this real estate now belong to LANDING-PAGE<br><router-outlet></router-outlet></div>'
})
export class LandingPageComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}