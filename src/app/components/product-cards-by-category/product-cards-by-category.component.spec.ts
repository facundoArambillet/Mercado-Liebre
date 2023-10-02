import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardsByCategoryComponent } from './product-cards-by-category.component';

describe('ProductCardsByCategoryComponent', () => {
  let component: ProductCardsByCategoryComponent;
  let fixture: ComponentFixture<ProductCardsByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardsByCategoryComponent]
    });
    fixture = TestBed.createComponent(ProductCardsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
