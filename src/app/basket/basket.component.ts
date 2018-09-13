import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DishModel} from '../shared/models/dish.model';
import {BasketService} from '../shared/basket.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  id: number;
  basket: DishModel[];
  price: number;
  @Output() deletes = new EventEmitter<DishModel[]>();

  constructor(private readonly basketService: BasketService) {
    this.id = 0;
    this.price = 0;
    this.basket = [];
  }

  ngOnInit() {
    this.basket = this.basketService.getDishesFromBasket();
  }

  removeDish(id: number, event: Event) {
    this.basketService.removeFromBasket(id);
    event.stopPropagation();
  }

  countPrice(): number {
    return this.price = this.basketService.countTotalPrice();
  }
}
