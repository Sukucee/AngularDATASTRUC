import { Injectable } from '@angular/core';
import ProductList from '../../Database/ProductList';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private product: ProductList[]=[];

  addProduct(id: string, name: string, type: string, price: number):void
  {this.product.push({
    id:id,
    name:name,
    type:type,
    price:price

  });
}
  getProduct(): ProductList[]{
    return this.product;
  }
  constructor() { }
}
