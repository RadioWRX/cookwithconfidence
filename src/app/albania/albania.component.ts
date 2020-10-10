import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-albania',
  templateUrl: './albania.component.html',
  styleUrls: ['./albania.component.scss']
})
export class AlbaniaComponent implements OnInit {

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
     items: 5
   },
    940: {
     items: 8
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
