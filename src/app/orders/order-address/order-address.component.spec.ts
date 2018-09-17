import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OrderAddressComponent} from './order-address.component';
import {BasketComponent} from '../../basket/basket.component';
import {BasketService} from '../../shared/basket.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('OrderAddressComponent', () => {
  let component: OrderAddressComponent;
  let fixture: ComponentFixture<OrderAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [OrderAddressComponent, BasketComponent],
      providers: [BasketService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
