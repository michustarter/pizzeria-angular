import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../models/dish';
import {Observable} from 'rxjs';
import {OrderData} from '../models/orderData';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  totalPrice: number;
  basket: Dish[];
  order: OrderData;

  constructor(
    private readonly httpClient: HttpClient
  ) {
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

  getDishesFromBasket(): Dish[] {
    return this.basket;
  }

  submitOrder(orderedBasket: OrderData): Observable<OrderData> {
    return this.httpClient.post<OrderData>('http://localhost:3000/orders', orderedBasket);
  }

  getOrder(id: number): Observable<OrderData> {
    return this.httpClient.get<OrderData>(`http://localhost:3000/orders/${id}`);
  }

  getOrders(): Observable<OrderData[]> {
    return this.httpClient.get <OrderData[]>('http://localhost:3000/orders');
  }

  setAsAccepted(order: OrderData): void {
    order.orderStage = 'accepted';
    this.httpClient.put<OrderData>('http://localhost:3000/orders/' + order.id, order)
      .subscribe();
  }

  setAsInRealization(order: OrderData): void {
    order.orderStage = 'in realization';
    this.httpClient.put<OrderData>('http://localhost:3000/orders/' + order.id, order)
      .subscribe();
  }

  setAsSent(order: OrderData): void {
    order.orderStage = 'sent';
    this.httpClient.put<OrderData>('http://localhost:3000/orders/' + order.id, order)
      .subscribe();
  }

  setAsDelivered(order: OrderData): void {
    order.orderStage = 'delivered';
    this.httpClient.put<OrderData>('http://localhost:3000/orders/' + order.id, order)
      .subscribe();
  }
}
