import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-algeria',
  templateUrl: './algeria.component.html',
  styleUrls: ['./algeria.component.scss']
})
export class AlgeriaComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
