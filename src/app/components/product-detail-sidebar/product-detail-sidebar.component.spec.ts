import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailSidebarComponent } from './product-detail-sidebar.component';

describe('ProductDetailSidebarComponent', () => {
  let component: ProductDetailSidebarComponent;
  let fixture: ComponentFixture<ProductDetailSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailSidebarComponent]
    });
    fixture = TestBed.createComponent(ProductDetailSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
