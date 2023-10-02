import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardsByCategoryFamilyComponent } from './product-cards-by-category-family.component';

describe('ProductCardsByCategoryFamilyComponent', () => {
  let component: ProductCardsByCategoryFamilyComponent;
  let fixture: ComponentFixture<ProductCardsByCategoryFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardsByCategoryFamilyComponent]
    });
    fixture = TestBed.createComponent(ProductCardsByCategoryFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
