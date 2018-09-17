import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderData} from '../../shared/models/orderData';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {BasketService} from '../../shared/services/basket.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})

export class OrdersListComponent implements OnInit, OnDestroy {

  orderStage: string;
  dishNames: string[];
  order: OrderData;
  orders: OrderData[];
  sub: Subscription;

  constructor(private readonly route: ActivatedRoute,
              private readonly basketService: BasketService) {
    this.dishNames = [];
    this.orderStage = 'accepted';
  }

  ngOnInit() {
    this.sub = this.basketService.getOrders().subscribe(orders => this.orders = orders);
    const id = this.route.snapshot.paramMap.get('id');
    this.sub = this.basketService.getOrder(+id).subscribe(order => this.order = order);
  }

  getOrderStage(order: OrderData): string {
    return order.orderStage;
  }

  setAsAccepted(order: OrderData): void {
    this.basketService.setAsAccepted(order);
  }

  setAsInRealization(order: OrderData): void {
    this.basketService.setAsInRealization(order);
  }

  setAsSent(order: OrderData): void {
    this.basketService.setAsSent(order);
  }

  setAsDelivered(order: OrderData): void {
    this.basketService.setAsDelivered(order);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
