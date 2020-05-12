import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtractions',
  templateUrl: './subtractions.component.html',
  styleUrls: ['./subtractions.component.css']
})
export class SubtractionsComponent implements OnInit {

  rows = [
  ];

  isAbacus = false;

  constructor() { }

  ngOnInit(): void {
  }

  isCorrect(row): boolean {
    return row.r != "" && (row.a - row.b == row.r);
  }

  isIncorrect(row): boolean {
    return row.r != "" && !this.isCorrect(row)
  }

  newRow(max: number): void {
    var a = 1, b = 2;
    while (a - b < 0) {
      a = Math.floor(Math.random() * max) + 1;
      b = Math.floor(Math.random() * max) + 1;
    }
    this.rows.unshift(
      {
        a: a,
        b: b,
        r: ""
      }
    );
  }

  abacus(): void {
    this.isAbacus = !this.isAbacus;
  }

}
