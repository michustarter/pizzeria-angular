import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {OrderDataModel} from '../shared/models/orderData.model';
import {BasketService} from '../shared/basket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  sub: Subscription;
  orders: OrderDataModel[];

  constructor(private readonly basketService: BasketService,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.sub = this.basketService.getOrders().subscribe(orders => this.orders = orders);
  }
}
