import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abacus',
  templateUrl: './abacus.component.html',
  styleUrls: ['./abacus.component.css']
})
export class AbacusComponent implements OnInit {

  rows = [];

  constructor() {
    this.reset();
  }

  ngOnInit(): void {
  }

  leftOfRow(row: number): Array<number> {
    let x = [];
    var i = 1;
    if (row > 0) while (x.push(i++) < row) { };
    return x;
  }

  rightOfRow(row: number): Array<number> {
    let x = [];
    var i = row + 1;
    if (i < 11) while (x.push(i++) < 10 - row) { };
    return x;
  }

  clickLeft(rowIdx: number, column: number): void {
    this.rows[rowIdx] = column - 1;
  }

  clickRight(rowIdx: number, column: number): void {
    this.rows[rowIdx] = column;
  }

  reset(): void {
    this.rows = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  }
}
