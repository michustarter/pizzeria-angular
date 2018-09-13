import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../shared/login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule,
      RouterTestingModule,
      ReactiveFormsModule],
      providers: [LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
