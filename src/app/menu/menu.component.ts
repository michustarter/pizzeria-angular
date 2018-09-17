import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../shared/models/dish';
import {MenuService} from '../shared/services/menu.service';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {BasketService} from '../shared/services/basket.service';
import {LoginService} from '../shared/services/login.service';
import {Subject} from 'rxjs';

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

  constructor(private readonly router: Router,
              private readonly menuService: MenuService,
              private readonly loginService: LoginService,
              private readonly basketService: BasketService) {
    this.basket = [];
    this.logged = this.loginService.getLoginStatus();
  }

  ngOnInit() {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getDishes();
  }

  getPizza(event: Event): void {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getPizza();
  }

  getPasta(event: Event): void {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getPasta();
  }

  getDrinks(event: Event): void {
    this.menuService.dishes$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      dishes => this.dishes = dishes
    );
    this.menuService.getDrinks();
  }

  addToBasket(dish: Dish): void {
    this.basketService.addDishToBasket(dish);
  }

  showDetail(dishId: number): void {
    this.router.navigate(['/menu', dishId]);
  }

  setAvailability(dish: Dish): void {
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

  isLoggedIn(): boolean {
    return this.logged;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
