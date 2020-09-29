import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-albania',
  templateUrl: './albania.component.html',
  styleUrls: ['./albania.component.scss']
})
export class AlbaniaComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
