import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/login.service';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  admin: User;
  sub: Subscription;

  loginAdminForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  constructor(readonly loginService: LoginService) {
    this.admin = <User>{};
  }

  ngOnInit() {
    this.sub = this.loginService.getAdmin()
      .subscribe(admin => this.users = admin);
  }

  loginAdmin(): void {
    this.admin.name = this.loginAdminForm.get('name').value;
    this.admin.password = this.loginAdminForm.get('password').value;
    if (this.users.find(
      admin => admin.name === this.admin.name
        && admin.password === this.admin.password)) {
      this.loginService.loginAdmin();
    } else {
      alert('Invalid login data');
    }
  }
}
