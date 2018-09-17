import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from './shared/services/menu.service';
import {LoginService} from './shared/services/login.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ActivatedRoute},
        MenuService,
        LoginService
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'pizza-angular'`, async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pizza-angular');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Pizzeria Angular');
  }));

  it('should called goToMenu method', () => {

    const router = TestBed.get(Router);
    const menuService = TestBed.get(MenuService);
    const getDishes = spyOn(menuService, 'getDishes');
    const navigate = spyOn(router, 'navigate');

    component.goToMenu();

    expect(getDishes).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalled();
  });

  it('should called isLoggedIn method', () => {
    const loginService = TestBed.get(LoginService);
    const getLoginStatus = spyOn(loginService, 'getLoginStatus');

    component.isLoggedIn();

    expect(getLoginStatus).toHaveBeenCalled();
  });

  it('should called logOut method', () => {
    const loginService = TestBed.get(LoginService);
    const logout = spyOn(loginService, 'logout');

    component.logOut();

    expect(logout).toHaveBeenCalled();
  });
});
