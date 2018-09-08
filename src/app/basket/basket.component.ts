import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @Input() basket: Dish[];
  @Output() deletes = new EventEmitter<Dish[]>();

  constructor() {
  }

  ngOnInit() {
  }

  delete(basket: Dish[], event: Event) {
    this.deletes.emit(this.basket);
    event.stopPropagation();
  }
}
