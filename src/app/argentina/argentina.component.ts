import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-argentina',
  templateUrl: './argentina.component.html',
  styleUrls: ['./argentina.component.scss']
})
export class ArgentinaComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
