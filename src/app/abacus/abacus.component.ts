import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abacus',
  templateUrl: './abacus.component.html',
  styleUrls: ['./abacus.component.css']
})
export class AbacusComponent implements OnInit {

  availableLookAndFeel = [
    {
      img: "/assets/images/bus1.svg",
      width: 72,
      height: 45
    },
    {
      img: "/assets/images/bus2.jpg",
      width: 72,
      height: 72
    },
    {
      img: "/assets/images/ball1.png",
      width: 50,
      height: 50
    }
  ];
  rows = [];
  activeLookAndFeel = this.availableLookAndFeel[2];

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
