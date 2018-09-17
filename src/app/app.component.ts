import {Component} from '@angular/core';
import {MenuService} from './shared/services/menu.service';
import {Router} from '@angular/router';
import {LoginService} from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizza-angular';

  constructor(private  router: Router,
              private readonly menuService: MenuService,
              private readonly loginService: LoginService) {
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
