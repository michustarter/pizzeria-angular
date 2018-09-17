import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  constructor(private readonly route: Router,
              private readonly http: HttpClient) {
  }

  getAdmin(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  loginAdmin(): void {
    this.isLoggedIn = true;
    this.route.navigate(['/']);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.route.navigate(['/']);
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
