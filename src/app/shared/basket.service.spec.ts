import {TestBed, inject} from '@angular/core/testing';
import {BasketService} from './basket.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Dish} from './models/dish';

describe('BasketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketService],
      imports: [
        HttpClientModule,
        RouterTestingModule]
    });
  });

  it('should be created', inject([BasketService], (service: BasketService) => {
    expect(service).toBeTruthy();
  }));

  it('should count total price of dishes in basket',
    inject([BasketService], (service: BasketService) => {
      const dish1 = <Dish>{
          price: 10
        },
        dish2 = <Dish>{
          price: 2
        };

      service.addDishToBasket(dish1);
      service.addDishToBasket(dish2);

      expect(service.countTotalPrice()).toBe(12);
    }));

  it('should remove dish from basket',
    inject([BasketService], (service: BasketService) => {
      const dish1 = <Dish>{},
        dish2 = <Dish>{};

      service.addDishToBasket(dish1);
      service.addDishToBasket(dish1);
      service.addDishToBasket(dish2);

      service.removeFromBasket(2);

      expect(service.basket.length).toBe(2);
    }));

  it('should add dish to basket',
    inject([BasketService], (service: BasketService) => {
      const dish = <Dish>{};

      service.addDishToBasket(dish);
      service.addDishToBasket(dish);

      expect(service.basket.length).toBe(2);
    }));

  it('should get dishes form basket',
    inject([BasketService], (service: BasketService) => {
      const dish1 = <Dish>{},
        dish2 = <Dish>{};

      service.addDishToBasket(dish1);
      service.addDishToBasket(dish1);
      service.addDishToBasket(dish2);

      expect(service.getDishesFromBasket().length).toBe(3);
    }));
});
