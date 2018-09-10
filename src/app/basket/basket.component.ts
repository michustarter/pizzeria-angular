import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';
import {BasketService} from '../shared/basket.service';
import {Subject} from 'rxjs';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  id = 0;
  basket: Dish[] = [];
  price: number;
  @Output() deletes = new EventEmitter<Dish[]>();
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly basketService: BasketService, private readonly menuService: MenuService) {
    this.price = 0;
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
