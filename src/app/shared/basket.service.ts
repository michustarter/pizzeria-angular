import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() {
  }

  addDishToBasket(dish) {
    return dish;
  }
}
