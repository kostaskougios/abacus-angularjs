import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.css']
})
export class AdditionsComponent implements OnInit {

  rows = [
  ];

  isAbacus = false;

  constructor() { }

  ngOnInit(): void {
  }

  isCorrect(row): boolean {
    return row.r != "" && (row.a + row.b == row.r);
  }

  isIncorrect(row): boolean {
    return row.r != "" && !this.isCorrect(row)
  }

  newRow(max: number): void {
    var a = max, b = max;
    while (a + b > max) {
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
