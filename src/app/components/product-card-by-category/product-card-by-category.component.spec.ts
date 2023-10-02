import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardByCategoryComponent } from './product-card-by-category.component';

describe('ProductCardByCategoryComponent', () => {
  let component: ProductCardByCategoryComponent;
  let fixture: ComponentFixture<ProductCardByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardByCategoryComponent]
    });
    fixture = TestBed.createComponent(ProductCardByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
