import {Component, EventEmitter, OnInit, Output, AfterViewChecked, OnDestroy} from '@angular/core';
import {Dish} from '../shared/dish';
import {MenuService} from '../shared/menu.service';
import {Subject, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {BasketService} from '../shared/basket.service';
import {LoginService} from "../shared/login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  dishes: Dish[];
  basket: Dish[];
  availability: string;

  logged: boolean;

  constructor(public readonly menuService: MenuService,
              private readonly basketService: BasketService,
              private readonly loginService: LoginService,
              private readonly router: Router) {

  }

  ngOnInit() {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getDishes();
    this.basket = [];
    this.logged = this.loginService.getLoginStatus();

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

  addToBasket(dish: Dish) {
    this.basketService.addDishToBasket(dish);
  }

  showDetail(dishId: number) {
    this.router.navigate(['/menu', dishId]);

  }

  setAvailability(dish: Dish) {
    this.menuService.setAvailability(dish);
  }

  getAvailability(dish: Dish): string {
    if (dish.isAvailable) {
      this.availability = 'available';
    } else if (!dish.isAvailable) {
      this.availability = 'temporarily unavailable';
    }
    return this.availability;
  }

  isAvailable(dish: Dish): boolean {
    if (dish.isAvailable === true) {
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn() {
    return this.logged;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
