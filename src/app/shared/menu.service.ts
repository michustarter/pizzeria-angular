import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DishModel} from './models/dish.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  dishes$ = new Subject<DishModel[]>();

  constructor(readonly httpClient: HttpClient) {
  }

  getDishes() {
    return this.httpClient.get<DishModel[]>('http://localhost:3000/dishes').subscribe(dishes => this.dishes$.next(dishes));
  }

  getDish(id: number): Observable<DishModel> {
    return this.httpClient.get<DishModel>(`http://localhost:3000/dishes/${id}`);
  }

  getPizza(): void {
    this.httpClient.get<DishModel[]>('http://localhost:3000/dishes/?type=pizza').subscribe(dishes => this.dishes$.next(dishes));
  }

  getPasta(): void {
    this.httpClient.get<DishModel[]>('http://localhost:3000/dishes/?type=spagetti').subscribe(dishes => this.dishes$.next(dishes));
  }

  getDrinks(): void {
    this.httpClient.get<DishModel[]>('http://localhost:3000/dishes/?type=drink').subscribe(dishes => this.dishes$.next(dishes));
  }

  setAvailability(dish: DishModel) {
    dish.isAvailable = !dish.isAvailable;
    this.httpClient.put<DishModel>('http://localhost:3000/dishes/' + dish.id, dish)
      .subscribe(res => this.getDishes());
  }
}
