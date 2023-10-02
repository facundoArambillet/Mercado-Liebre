import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardByCategoryFamilySidebarComponent } from './product-card-by-category-family-sidebar.component';

describe('ProductCardByCategoryFamilySidebarComponent', () => {
  let component: ProductCardByCategoryFamilySidebarComponent;
  let fixture: ComponentFixture<ProductCardByCategoryFamilySidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardByCategoryFamilySidebarComponent]
    });
    fixture = TestBed.createComponent(ProductCardByCategoryFamilySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
