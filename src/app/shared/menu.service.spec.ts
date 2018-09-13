import { TestBed, inject } from '@angular/core/testing';

import { MenuService } from './menu.service';
import {HttpClientModule} from "@angular/common/http";

describe('MenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));
});
