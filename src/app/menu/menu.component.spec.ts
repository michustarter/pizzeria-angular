import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../shared/menu.service';
import {BasketService} from '../shared/basket.service';
import {LoginService} from '../shared/login.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

class ActivatedRouteMock {
  snapshot: {
    paramMap: {
      'id': 1
    }
  };
}


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        MenuService,
        BasketService,
        LoginService,
        HttpClient,
        HttpHandler
      ],
      imports: [HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
