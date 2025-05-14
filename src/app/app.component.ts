import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  protected products: ProductType[] = [
    {
      image: 'product1.png',
      title: 'Макарун с малиной',
      price: '1,70',
    },
    {
      image: 'product2.png',
      title: 'Макарун с манго',
      price: '1,70',
    },
    {
      image: 'product3.png',
      title: 'Пирог с ванилью',
      price: '1,70',
    },
    {
      image: 'product4.png',
      title: 'Пирог с фисташками',
      price: '1,70',
    },
  ];

  protected orderInfo = {
    productTitle: '',
    name: '',
    phone: '',
  };

  protected showPresent: boolean = true;
  protected contactPhone: string = '+375 (29) 368-98-68';
  protected instagramLink: string = 'https://google.com';

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  protected addToCart(productTitle: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.orderInfo.productTitle = productTitle.toUpperCase();
  };
}
