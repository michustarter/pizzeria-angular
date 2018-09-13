import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {BasketService} from "../shared/basket.service";

class ActivatedRouteMock {
  snapshot: {
    paramMap: {
      'id': 1
    }
  };
}

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        BasketService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


