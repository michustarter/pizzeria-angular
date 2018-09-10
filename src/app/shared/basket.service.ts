import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from './dish';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {MenuService} from "./menu.service";
import {OrderData} from "./orderData";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  totalPrice: number;
  basket: Dish[];

  constructor(private readonly httpClient: HttpClient, private  router: Router, private readonly menuService: MenuService) {
    this.totalPrice = 0;
    this.basket = [];
  }

  countTotalPrice(): number {
    this.totalPrice = 0;
    for (const dish of this.getDishesFromBasket()) {
      this.totalPrice = this.totalPrice + +dish.price;
    }
    return this.totalPrice;
  }

  removeFromBasket(id: number): void {
    this.basket.splice(id, 1);
    this.countTotalPrice();
  }

  addDishToBasket(dish: Dish): void {
    this.basket.push(dish);
  }

  getDishesFromBasket() {
    return this.basket;
  }

  submitOrder(orderedBasket: OrderData): Observable<OrderData> {
    return this.httpClient.post<OrderData>('http://localhost:3000/orders', orderedBasket);
  }


}
