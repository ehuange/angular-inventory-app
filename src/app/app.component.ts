import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'black running shoes',
        'https://bit.ly/2KqjNEz',
        ['men', 'shoes', 'running shoes'],
        109.99),
        new Product(
          'NEATOJACKET',
          'Blue Jacket',
          'https://bit.ly/2KkcwpJ',
          ['women', 'apparel', 'jackets'],
          238.99
        ),
        new Product(
          'some product',
          'some description',
          'some image',
          ['some categories', 'category2'],
          100.00
        )
      ];
    }

    productWasSelected(product: Product): void {
      console.log('Product clicked: ', product);
    }

}
