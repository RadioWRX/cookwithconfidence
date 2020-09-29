import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-afghanistan',
  templateUrl: './afghanistan.component.html',
  styleUrls: ['./afghanistan.component.scss']
})
export class AfghanistanComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
