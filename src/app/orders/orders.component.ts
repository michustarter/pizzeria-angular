import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {OrderData} from '../shared/models/orderData';
import {BasketService} from '../shared/services/basket.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  sub: Subscription;
  orders: OrderData[];

  constructor(private readonly basketService: BasketService) {
  }

  ngOnInit() {
    this.sub = this.basketService.getOrders().subscribe(orders => this.orders = orders);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
