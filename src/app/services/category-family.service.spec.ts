import { TestBed } from '@angular/core/testing';

import { CategoryFamilyService } from './category-family.service';

describe('CategoryFamilyService', () => {
  let service: CategoryFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
