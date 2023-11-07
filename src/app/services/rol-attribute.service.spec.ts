import { TestBed } from '@angular/core/testing';

import { RolAttributeService } from './rol-attribute.service';

describe('RolAttributeService', () => {
  let service: RolAttributeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolAttributeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
