import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {OrderData} from '../shared/orderData';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {BasketService} from '../shared/basket.service';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  orders: OrderData[];
  order: OrderData;
  sub: Subscription;
  dishNames: string[];
  orderStage: string;

  constructor(private readonly route: ActivatedRoute,
              private readonly basketService: BasketService,
              private readonly menuService: MenuService) {
    this.dishNames = [];
    this.orderStage = 'accepted';
  }

  ngOnInit() {
    this.sub = this.basketService.getOrders().subscribe(orders => this.orders = orders);
    const id = this.route.snapshot.paramMap.get('id');
    this.sub = this.basketService.getOrder(+id).subscribe(order => this.order = order);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getOrderStage(order: OrderData): string {
    return order.orderStage;
  }

  setAsAccepted(order: OrderData) {
    this.basketService.setAsAccepted(order);
  }

  setAsInRealization(order: OrderData) {
    this.basketService.setAsInRealization(order);
  }

  setAsSent(order: OrderData) {
    this.basketService.setAsSent(order);
  }
  setAsDelivered(order: OrderData) {
    this.basketService.setAsDelivered(order);
  }
}
