import { Component } from '@angular/core';
import { ProductList } from '../common/product-list.constant';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  public productList = ProductList;
}
