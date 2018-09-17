import {inject, TestBed} from '@angular/core/testing';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
      imports: [HttpClientModule, RouterTestingModule]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('should navigate to address \'/\' after login in', inject([LoginService], (service: LoginService) => {
    const router = TestBed.get(Router);
    const navigate = spyOn(router, 'navigate');
    let isLoggedIn: boolean;

    service.loginAdmin();
    isLoggedIn = service.getLoginStatus();

    expect(isLoggedIn).toEqual(true);
    expect(navigate).toHaveBeenCalledWith(['/']);
  }));

  it('should navigate to address \'/\' after logout', inject([LoginService], (service: LoginService) => {
    const router = TestBed.get(Router);
    const navigate = spyOn(router, 'navigate');
    let isLoggedIn: boolean;

    service.logout();
    isLoggedIn = service.getLoginStatus();

    expect(isLoggedIn).toEqual(false);
    expect(navigate).toHaveBeenCalledWith(['/']);
  }));
});
