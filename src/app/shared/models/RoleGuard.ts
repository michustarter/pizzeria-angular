import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from '../login.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private readonly loginService: LoginService) {
  }

  canActivate(): boolean {
    return this.loginService.isLoggedIn;
  }

}
