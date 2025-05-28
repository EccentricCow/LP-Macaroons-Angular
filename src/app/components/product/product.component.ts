import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() imageNumber: number = 0;
  @Input() index: number = 0;
  @Input() title: string = '';
  @Input() price: string = '';

  @Output() addToCartEvent: EventEmitter<null> = new EventEmitter<null>;

  constructor() { }

  addProductToCart() {
    this.addToCartEvent.emit();
  }
}
