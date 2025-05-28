import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalCost: number = 0;
  totalQuantity: number = 0;

  constructor() {
  }

  addProductToCart(price: number): void {
    this.totalCost += price;
    this.totalQuantity++;
  }
}
