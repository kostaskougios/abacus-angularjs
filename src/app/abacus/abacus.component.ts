import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abacus',
  templateUrl: './abacus.component.html',
  styleUrls: ['./abacus.component.css']
})
export class AbacusComponent implements OnInit {

  rows = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
