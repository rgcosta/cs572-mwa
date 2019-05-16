import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `This is a smart component
    <br>
  <dumb-component [products]="products" (onProductClick)="getProduct($event)"></dumb-component>
  `,
  styles: []
})
export class AppComponent {
  products = [{name:"Shoes", price:100}, {name:"T-Shirt", price: 60}];

  getProduct(product: any) {
    console.log(product);
  }
}
