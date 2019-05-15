import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter [counter]="componentCounterValue1" (counterChange)="getValue1($event)"></app-counter>
  <br>
  <app-counter [counter]="componentCounterValue2" (counterChange)="getValue2($event)"></app-counter>
  <br>
  Component1 Counter Value: {{componentCounterValue1}}<br>
  Component2 Counter Value: {{componentCounterValue2}}
  `,
  styles: []
})
export class AppComponent {
  title = 'myApp';

  componentCounterValue1 = 5;
  componentCounterValue2 = 0;

  getValue1(value: number) {
    this.componentCounterValue1 = value;
    console.log("Value: " + value);
    console.log("CompValue: " + this.componentCounterValue1);
  }

  getValue2(value: number) {
    this.componentCounterValue2 = value;
    console.log("Value: " + value);
    console.log("CompValue: " + this.componentCounterValue2);
  }
}
