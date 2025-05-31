import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];
  protected products: ProductType[] = [];

  protected orderInfo = {
    productTitle: '',
    name: '',
    phone: '',
  };

  protected showPresent: boolean = true;
  protected contactPhone: string = '375293689868';
  protected instagramLink: string = 'https://google.com';

  constructor(private productService: ProductService,
              protected cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

  }

  protected scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  protected addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.orderInfo.productTitle = product.title.toUpperCase();
    this.cartService.addProductToCart(parseFloat(product.price.replace(',', '.')));
    alert(product.title + ' добавлен в корзину!');
  };

  protected readonly parseFloat = parseFloat;
  protected readonly Number = Number;
}
