import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ProductList } from '../common/product-list.constant';

export interface StyleList {
  label: string;
  url: string;
}

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [NgFor, MatCardModule, RouterLink],
})
export class HomePageComponent {
  public productList = ProductList;
}
