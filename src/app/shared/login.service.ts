import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserModel} from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  constructor(private readonly http: HttpClient,
              private readonly route: Router) {
  }

  getAdmin(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:3000/users');
  }

  loginAdmin() {
    this.isLoggedIn = true;
    this.route.navigate(['/']);
  }

  logout() {
    this.isLoggedIn = false;
    this.route.navigate(['/']);
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }
}
