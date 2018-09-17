import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {User} from '../shared/models/user';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  admin: User;
  user: User[];
  private readonly destroy$ = new Subject();

  loginAdminForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  constructor(readonly loginService: LoginService) {
    this.admin = <User>{};
  }

  ngOnInit() {
    this.loginService.getAdmin()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.user = res);
  }

  loginAdmin(): void {
    this.admin.name = this.loginAdminForm.get('name').value;
    this.admin.password = this.loginAdminForm.get('password').value;
    if (this.user.find(
      admin => admin.name === this.admin.name
        && admin.password === this.admin.password)) {
      this.loginService.loginAdmin();
    } else {
      alert('Invalid login data');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
