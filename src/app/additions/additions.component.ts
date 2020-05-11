import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.css']
})
export class AdditionsComponent implements OnInit {

  rows = [
    {
      a: 5,
      b: 7,
      r: 12
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isCorrect(row): boolean {
    return row.a + row.b == row.r;
  }
}
