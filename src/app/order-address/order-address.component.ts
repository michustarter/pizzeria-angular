import {Component, OnInit} from '@angular/core';
import {MenuService} from '../shared/menu.service';
import {BasketService} from '../shared/basket.service';
import {Subscription} from 'rxjs';
import {Dish} from '../shared/dish';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderData} from '../shared/orderData';

@Component({
  selector: 'app-order-address',
  templateUrl: './order-address.component.html',
  styleUrls: ['./order-address.component.scss']
})
export class OrderAddressComponent implements OnInit {

  sub: Subscription;
  orderedBasket: OrderData;
  dishes: Dish[];
  dishesIds: number[];

  orderAddressForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phoneNumber: new FormControl(),
    mail: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    local: new FormControl(),
    floor: new FormControl(),
  });

  constructor(readonly basketService: BasketService, readonly menuService: MenuService) {
    this.dishesIds = [];
    this.orderedBasket = <OrderData>{};
  }

  ngOnInit() {
    this.dishes = this.basketService.getDishesFromBasket();
    this.dishes.forEach(dish => this.dishesIds.push(dish.id));
  }

  submitOrder(): void {
    this.orderedBasket.dishIds = this.dishesIds;
    this.orderedBasket.firstName = this.orderAddressForm.get('firstName').value;
    this.orderedBasket.lastName = this.orderAddressForm.get('lastName').value;
    this.orderedBasket.city = this.orderAddressForm.get('city').value;
    this.orderedBasket.street = this.orderAddressForm.get('street').value;
    this.orderedBasket.local = this.orderAddressForm.get('local').value;
    this.orderedBasket.floor = this.orderAddressForm.get('floor').value;
    this.orderedBasket.mail = this.orderAddressForm.get('mail').value;
    this.orderedBasket.phoneNumber = this.orderAddressForm.get('phoneNumber').value;
    this.orderedBasket.orderStage = 'received';
    this.orderedBasket.date = new Date();
    this.sub = this.basketService.submitOrder(this.orderedBasket).subscribe();
  }
}

