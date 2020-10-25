import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-austria',
  templateUrl: './austria.component.html',
  styleUrls: ['./austria.component.scss']
})
export class AustriaComponent implements OnInit {

  customOptions1: any = {
  loop: false,
  margin: 10,
  touchDrag:true,
  autoplay:false,
  responsiveClass: true,
  navText: ['Previous', 'Next'],
  responsive: {
    0: {
     items: 3
   },
    480: {
     items: 5
   },
    940: {
     items: 8
   }
  },
 nav: false
}

customOptions2: any = {
loop: true,
margin: 10,
touchDrag:true,
autoplay:true,
responsiveClass: true,
navText: ['Previous', 'Next'],
responsive: {
  0: {
   items: 1
 },
  480: {
   items: 1
 },
  940: {
   items: 1
 }
},
nav: false
}

customOptions3: any = {
loop: false,
margin: 10,
touchDrag:true,
autoplay:false,
responsiveClass: true,
navText: ['Previous', 'Next'],
responsive: {
  0: {
   items: 1
 },
  480: {
   items: 1
 },
  940: {
   items: 1
 }
},
nav: false
}

  constructor() { }

  ngOnInit(): void {
  }

}
