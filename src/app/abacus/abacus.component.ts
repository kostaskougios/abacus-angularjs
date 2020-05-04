import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-abacus',
  templateUrl: './abacus.component.html',
  styleUrls: ['./abacus.component.css']
})
export class AbacusComponent implements OnInit {

  availableLookAndFeel = [
    {
      img: "/assets/images/ball1.png",
      width: 50,
      height: 50
    },
    {
      img: "/assets/images/bus2.jpg",
      width: 50,
      height: 50
    },
    {
      img: "/assets/images/bus1.svg",
      width: 50,
      height: 50
    }

  ];
  rows = [];
  activeLookAndFeelIdx = 0;
  activeLookAndFeel = this.availableLookAndFeel[this.activeLookAndFeelIdx];
  sizeFactor: number = 1;

  constructor() {
    this.reset();
    this.onResize(null);
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let iw = window.innerWidth;
    this.sizeFactor = iw / 700;
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

  nextTheme(): void {
    this.activeLookAndFeelIdx++;
    if (this.activeLookAndFeelIdx >= this.availableLookAndFeel.length) this.activeLookAndFeelIdx = 0;
    this.activeLookAndFeel = this.availableLookAndFeel[this.activeLookAndFeelIdx];
  }

  width(): number {
    return this.activeLookAndFeel.width * this.sizeFactor;
  }
  height(): number {
    return this.activeLookAndFeel.height * this.sizeFactor;
  }
}
