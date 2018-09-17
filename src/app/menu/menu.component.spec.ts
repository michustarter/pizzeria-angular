import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MenuComponent} from './menu.component';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../shared/services/menu.service';
import {BasketService} from '../shared/services/basket.service';
import {LoginService} from '../shared/services/login.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {Dish} from '../shared/models/dish';


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [
        {provide: ActivatedRoute},
        MenuService,
        BasketService,
        LoginService,
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

  it('should called addDishToBasket method', () => {
    const dish: Dish = <Dish>{};
    const basketService = TestBed.get(BasketService);
    const addDishToBasket = spyOn(basketService, 'addDishToBasket');

    component.addToBasket(dish);

    expect(addDishToBasket).toHaveBeenCalledWith(dish);
  });

  it('should called setAvailability method', () => {
    const dish: Dish = <Dish>{};
    const menuService = TestBed.get(MenuService);
    const setAvailability = spyOn(menuService, 'setAvailability');

    component.setAvailability(dish);

    expect(setAvailability).toHaveBeenCalledWith(dish);
  });

  it('should called showDetail method', () => {
    const dish: Dish = <Dish>{};
    const router = TestBed.get(Router);
    const navigate = spyOn(router, 'navigate');

    component.showDetail(dish.id);

    expect(navigate).toHaveBeenCalledWith(['/menu', dish.id]);
  });

  it('should called getPizza method', () => {
    const event: Event = <Event>{};

    const menuService = TestBed.get(MenuService);
    const getPizza = spyOn(menuService, 'getPizza');

    component.getPizza(event);

    expect(getPizza).toHaveBeenCalled();
  });

  it('should called getPasta method', () => {
    const event: Event = <Event>{};

    const menuService = TestBed.get(MenuService);
    const getPasta = spyOn(menuService, 'getPasta');

    component.getPasta(event);

    expect(getPasta).toHaveBeenCalled();
  });

  it('should called getDrinks method', () => {
    const event: Event = <Event>{};

    const menuService = TestBed.get(MenuService);
    const getDrinks = spyOn(menuService, 'getDrinks');

    component.getDrinks(event);

    expect(getDrinks).toHaveBeenCalled();
  });

  it('should return dish availability equals \'temporarily unavailable\'', () => {
    const dish: Dish = <Dish>{
      isAvailable: false
    };

    expect(component.getAvailability(dish)).toEqual('temporarily unavailable');
  });

  it('should return dish availability equals \'available\'', () => {
    const dish: Dish = <Dish>{
      isAvailable: true
    };

    expect(component.getAvailability(dish)).toEqual('available');
  });

  it('should return false if admin is not logged in ', () => {

    expect(component.isLoggedIn()).toBeFalsy();
  });
});
