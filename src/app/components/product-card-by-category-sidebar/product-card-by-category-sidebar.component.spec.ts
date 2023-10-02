import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardByCategorySidebarComponent } from './product-card-by-category-sidebar.component';

describe('ProductCardByCategorySidebarComponent', () => {
  let component: ProductCardByCategorySidebarComponent;
  let fixture: ComponentFixture<ProductCardByCategorySidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardByCategorySidebarComponent]
    });
    fixture = TestBed.createComponent(ProductCardByCategorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
