import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../shared/menu.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, OnDestroy {

  dish: Dish;
  sub: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly menuService: MenuService,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.sub = this.menuService.getDish(+id).subscribe(dish => {
      this.dish = dish;
    });
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
