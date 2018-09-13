import {Component, OnInit} from '@angular/core';
import {MenuService} from '../shared/menu.service';
import {BasketService} from '../shared/basket.service';
import {Subscription} from 'rxjs';
import {Dish} from '../shared/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  orderAddressForm: FormGroup;

  constructor(private readonly basketService: BasketService) {
    this.dishesIds = [];
    this.orderedBasket = <OrderData>{};
  }

  ngOnInit() {
    this.dishes = this.basketService.getDishesFromBasket();
    this.dishes.forEach(dish => this.dishesIds.push(dish.id));

    this.orderAddressForm = new FormGroup({
      'firstName': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'lastName': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'phoneNumber': new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12)
      ]),
      'mail': new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      'city': new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'street': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'local': new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      'floor': new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
    });
  }

  submitOrder(): void {
    this.orderedBasket = this.orderAddressForm.value;
    this.orderedBasket.dishIds = this.dishesIds;
    this.orderedBasket.orderStage = 'accepted';
    this.orderedBasket.date = new Date();
    this.sub = this.basketService.submitOrder(this.orderedBasket).subscribe();
    alert('Order accepted');
  }
}
