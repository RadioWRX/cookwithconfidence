import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-antigua',
  templateUrl: './antigua.component.html',
  styleUrls: ['./antigua.component.scss']
})
export class AntiguaComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
