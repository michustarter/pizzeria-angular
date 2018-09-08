import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Dish} from './dish';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  dishes$ = new Subject<Dish[]>();

  constructor(readonly httpClient: HttpClient) {
  }

  getDishes() {
    this.httpClient.get<Dish[]>('http://localhost:3000/dishes').subscribe(dishes => this.dishes$.next(dishes));
  }

  getDish(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(`http://localhost:3000/dishes/${id}`);
  }

  getPizza(): void {
    this.httpClient.get<Dish[]>('http://localhost:3000/dishes/?type=pizza').subscribe(dishes => this.dishes$.next(dishes));
  }

  getPasta(): void {
    this.httpClient.get<Dish[]>('http://localhost:3000/dishes/?type=spagetti').subscribe(dishes => this.dishes$.next(dishes));
  }

  getDrinks(): void {
    this.httpClient.get<Dish[]>('http://localhost:3000/dishes/?type=drink').subscribe(dishes => this.dishes$.next(dishes));
  }

  addDish(dish: Dish) {
    this.httpClient.post('http://localhost:3000/dishes', dish).subscribe(res => this.getDishes());
  }

  deleteDish(dish: Dish) {
   // this.httpClient.delete('http://localhost:3000/dishes', ).subscribe(res => this.getDishes());
   // this.httpClient.delete()
  }
}
