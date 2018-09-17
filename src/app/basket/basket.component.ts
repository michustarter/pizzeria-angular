import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/models/dish';
import {BasketService} from '../shared/basket.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  id: number;
  basket: Dish[];
  price: number;
  @Output() deletes = new EventEmitter<Dish[]>();

  constructor(private readonly basketService: BasketService) {
    this.id = 0;
    this.price = 0;
    this.basket = [];
  }

  ngOnInit() {
    this.basket = this.basketService.getDishesFromBasket();
  }

  removeDish(id: number) {
    this.basketService.removeFromBasket(id);
  }

  countPrice(): number {
    return this.price = this.basketService.countTotalPrice();
  }
}
