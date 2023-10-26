import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOffertsSidebarComponent } from './product-offerts-sidebar.component';

describe('ProductOffertsSidebarComponent', () => {
  let component: ProductOffertsSidebarComponent;
  let fixture: ComponentFixture<ProductOffertsSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOffertsSidebarComponent]
    });
    fixture = TestBed.createComponent(ProductOffertsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
