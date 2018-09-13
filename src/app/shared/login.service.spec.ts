import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

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
});
