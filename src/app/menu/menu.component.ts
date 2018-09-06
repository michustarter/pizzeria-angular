import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getDishes().subscribe(res => this.dishes = res);
    /*this.menuService.getDishes().subscribe(dishes => this.dishes = dishes);*/
  }

}
