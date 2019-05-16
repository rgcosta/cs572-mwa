import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'dumb-component',
  template: `
    <ul>
      <li *ngFor="let product of products" (click)="sendProduct(product)">{{product.name}} - $ {{product.price}}</li>
    </ul>
  `,
  styles: []
})
export class DumbComponent  {
  @Input() products;
  @Output('onProductClick') eventEmitter: EventEmitter<any>;
  constructor() {
    this.eventEmitter = new EventEmitter();
  }


  sendProduct(product: any) {
    this.eventEmitter.emit(product);
  }
}
