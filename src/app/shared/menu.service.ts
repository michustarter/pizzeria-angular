import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Dish} from './dish';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(readonly httpClient: HttpClient) {
  }

  getDishes(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>('http://localhost:3000/dishes');
  }
}
