import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Dish} from '../models/dish';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  dishes$ = new Subject<Dish[]>();

  constructor(readonly httpClient: HttpClient) {
  }

  getDishes() {
    return this.httpClient.get<Dish[]>('http://localhost:3000/dishes')
      .subscribe(dishes => this.dishes$.next(dishes));
  }

  getDish(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`http://localhost:3000/dishes/${id}`);
  }

  getPizza(): void {
    this.httpClient.get<Dish[]>('http://localhost:3000/dishes/?type=pizza')
      .subscribe(dishes => this.dishes$.next(dishes));
  }

  getPasta(): void {
    this.httpClient.get<Dish[]>('http://localhost:3000/dishes/?type=spagetti')
      .subscribe(dishes => this.dishes$.next(dishes));
  }

  getDrinks(): void {
    this.httpClient.get<Dish[]>('http://localhost:3000/dishes/?type=drink')
      .subscribe(dishes => this.dishes$.next(dishes));
  }

  setAvailability(dish: Dish): void {
    dish.isAvailable = !dish.isAvailable;
    this.httpClient.put<Dish>('http://localhost:3000/dishes/' + dish.id, dish)
      .subscribe(res => this.getDishes());
  }
}
