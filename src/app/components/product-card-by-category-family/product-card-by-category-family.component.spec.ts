import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardByCategoryFamilyComponent } from './product-card-by-category-family.component';

describe('ProductCardByCategoryFamilyComponent', () => {
  let component: ProductCardByCategoryFamilyComponent;
  let fixture: ComponentFixture<ProductCardByCategoryFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardByCategoryFamilyComponent]
    });
    fixture = TestBed.createComponent(ProductCardByCategoryFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
