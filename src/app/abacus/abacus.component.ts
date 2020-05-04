import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abacus',
  templateUrl: './abacus.component.html',
  styleUrls: ['./abacus.component.css']
})
export class AbacusComponent implements OnInit {

  rows = [3, 5, 7, 2, 3, 4, 5, 6, 7, 10];

  constructor() { }

  ngOnInit(): void {
  }

  leftOfRow(row: number): Array<number> {
    let x = [];
    var i = 1;
    while (x.push(i++) < row) { };
    return x;
  }

  rightOfRow(row: number): Array<number> {
    let x = [];
    var i = row + 1;
    if (i < 11) while (x.push(i++) < 10 - row) { };
    return x;
  }

  setRow(rowIdx: number, column: number): void {
    this.rows[rowIdx] = column - 1;
  }

}
