import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-andorra',
  templateUrl: './andorra.component.html',
  styleUrls: ['./andorra.component.scss']
})
export class AndorraComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
