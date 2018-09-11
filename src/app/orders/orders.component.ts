import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {OrderData} from '../shared/orderData';
import {BasketService} from '../shared/basket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  sub: Subscription;
  orders: OrderData[];

  constructor(private readonly basketService: BasketService,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.sub = this.basketService.getOrders().subscribe(orders => this.orders = orders);
  }

  showOrderDetail(orderId: number) {
    this.router.navigate(['/orders', orderId]);
  }

}
