import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="dec()">-</button>
    {{counter}}
    <button (click)="inc()">+</button>
  `,
  styles: []
})
export class CounterComponent {
  @Input() counter: number;
  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter<number>();
  }

  inc() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  dec() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }
}
