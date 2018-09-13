import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OrdersListComponent} from './orders-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BasketService} from '../../shared/basket.service';
import {HttpClientModule} from '@angular/common/http';


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
});
