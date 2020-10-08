import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-afghanistan',
  templateUrl: './afghanistan.component.html',
  styleUrls: ['./afghanistan.component.scss']
})
export class AfghanistanComponent implements OnInit {

  customOptions: any = {
  loop: false,
  margin: 10,
  autoplay:true,
  responsiveClass: true,
  navText: ['Previous', 'Next'],
  responsive: {
    0: {
     items: 3
   },
    480: {
     items: 4
   },
    940: {
     items: 10
   }
  },
 nav: true
}

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
