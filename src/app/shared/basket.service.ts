import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DishModel} from './models/dish.model';
import {Observable} from 'rxjs';
import {OrderDataModel} from './models/orderData.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  totalPrice: number;
  basket: DishModel[];
  order: OrderDataModel;

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

  addDishToBasket(dish: DishModel): void {
    this.basket.push(dish);
  }

  getDishesFromBasket() {
    return this.basket;
  }

  submitOrder(orderedBasket: OrderDataModel): Observable<OrderDataModel> {
    return this.httpClient.post<OrderDataModel>('http://localhost:3000/orders', orderedBasket);
  }

  getOrder(id: number): Observable<OrderDataModel> {
    return this.httpClient.get<OrderDataModel>(`http://localhost:3000/orders/${id}`);
  }

  getOrders(): Observable<OrderDataModel[]> {
    return this.httpClient.get <OrderDataModel[]>('http://localhost:3000/orders');
  }

  setAsAccepted(order: OrderDataModel) {
    order.orderStage = 'accepted';
    this.httpClient.put<OrderDataModel>('http://localhost:3000/orders/' + order.id, order).subscribe();
  }

  setAsInRealization(order: OrderDataModel) {
    order.orderStage = 'in realization';
    this.httpClient.put<OrderDataModel>('http://localhost:3000/orders/' + order.id, order).subscribe();
  }

  setAsSent(order: OrderDataModel) {
    order.orderStage = 'sent';
    this.httpClient.put<OrderDataModel>('http://localhost:3000/orders/' + order.id, order).subscribe();
  }

  setAsDelivered(order: OrderDataModel) {
    order.orderStage = 'delivered';
    this.httpClient.put<OrderDataModel>('http://localhost:3000/orders/' + order.id, order).subscribe();
  }
}
