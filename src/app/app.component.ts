import {Component} from '@angular/core';
import {MenuService} from './shared/menu.service';
import {Router} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./shared/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizza-angular';

  constructor(private readonly menuService: MenuService,
              private readonly loginService: LoginService,
              private  router: Router) {
  }

  goToMenu() {
    this.menuService.getDishes();
    this.router.navigate(['/menu']);
  }

  isLoggedIn() {
    return this.loginService.getLoginStatus();
  }

  logOut() {
    this.loginService.logout();
    alert('Admin logged out');
  }
}
