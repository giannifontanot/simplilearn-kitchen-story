import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product";

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
products: IProduct[] = [
  {
    "productId": 1,
    "productName": "asparagus",
    "price": 3
  },
  {
    "productId": 2,
    "productName": "apples",
    "price": 1.3
  }
]
  productsFiltered: IProduct[] = [];
  listFilter: string = 'asp';
  constructor() { }

  ngOnInit(): void {
    this.productsFiltered = this.products.filter(
      product => product.productName.toLowerCase().includes(this.listFilter.toLowerCase())
    );
  }

  search() {
    this.productsFiltered = this.products.filter(
      product => product.productName.toLowerCase().includes(this.listFilter.toLowerCase())
    );

  }

}
