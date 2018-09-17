import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OrdersListComponent} from './orders-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BasketService} from '../../shared/basket.service';
import {HttpClientModule} from '@angular/common/http';
import {OrderData} from '../../shared/models/orderData';

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [OrdersListComponent],
      providers: [
        BasketService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called setAsAccepted method', () => {
    const order: OrderData = <OrderData>{};

    const basketService = TestBed.get(BasketService);
    const setAsAccepted = spyOn(basketService, 'setAsAccepted');

    component.setAsAccepted(order);

    expect(setAsAccepted).toHaveBeenCalledWith(order);
  });

  it('should called setAsInRealization method', () => {
    const order: OrderData = <OrderData>{};

    const basketService = TestBed.get(BasketService);
    const setAsInRealization = spyOn(basketService, 'setAsInRealization');

    component.setAsInRealization(order);

    expect(setAsInRealization).toHaveBeenCalledWith(order);
  });

  it('should called setAsSent method', () => {
    const order: OrderData = <OrderData>{};

    const basketService = TestBed.get(BasketService);
    const setAsSent = spyOn(basketService, 'setAsSent');

    component.setAsSent(order);

    expect(setAsSent).toHaveBeenCalledWith(order);
  });

  it('should called setAsDelivered method', () => {
    const order: OrderData = <OrderData>{};

    const basketService = TestBed.get(BasketService);
    const setAsDelivered = spyOn(basketService, 'setAsDelivered');

    component.setAsDelivered(order);

    expect(setAsDelivered).toHaveBeenCalledWith(order);
  });

  it('should return order stage as \'accepted\'', () => {
    const order: OrderData = <OrderData>{
      orderStage: 'sent'
    };
    expect(component.getOrderStage(order)).toEqual('sent');
  });
});
