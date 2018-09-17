import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {OrderData} from '../shared/models/orderData';
import {BasketService} from '../shared/basket.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  sub: Subscription;
  orders: OrderData[];

  constructor(private readonly basketService: BasketService) {
  }

  ngOnInit() {
    this.sub = this.basketService.getOrders().subscribe(orders => this.orders = orders);
  }
}
