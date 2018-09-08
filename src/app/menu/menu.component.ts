import {Component, EventEmitter, OnInit, Output, AfterViewChecked, OnDestroy} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Subject, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {BasketService} from '../shared/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  @Output() pizza = new EventEmitter<Dish>();
  private destroy$: Subject<void> = new Subject<void>();
  dishes: Dish[];
  basket: Dish[];

  constructor(public readonly menuService: MenuService,
              private readonly orderService: BasketService,
              private router: Router) {
  }

  ngOnInit() {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getDishes();
    this.basket = [];
  }

  getPizza(event: Event) {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getPizza();
  }

  getPasta(event: Event) {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getPasta();
  }

  getDrinks(event: Event) {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getDrinks();
  }

  addToBasket(event: Event) {
    const id = event.srcElement.getAttribute('id');
    this.menuService.getDish(Number(id.substr(3))).subscribe(dish => this.basket.push(dish));
  }

  removeFromBasket(event: Event) {
    const id = event.srcElement.getAttribute('id');
    this.menuService.getDish(Number(id.substr(3))).subscribe(dish => this.basket.push(dish));
  }

  showDetail(dishId: number) {
    this.router.navigate(['/menu', dishId]);

  }

  addDish(event: Event) {
    const dish: Dish = {
      price: 20, description: 'pomidor, ser, salata, ogórek',
      isAvailable: true, name: 'pizza-salatka', type: 'pizza'
    };
    this.menuService.addDish(dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
