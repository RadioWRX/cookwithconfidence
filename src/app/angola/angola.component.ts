import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-angola',
  templateUrl: './angola.component.html',
  styleUrls: ['./angola.component.scss']
})
export class AngolaComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
