import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailContentComponent } from './product-detail-content.component';

describe('ProductDetailContentComponent', () => {
  let component: ProductDetailContentComponent;
  let fixture: ComponentFixture<ProductDetailContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailContentComponent]
    });
    fixture = TestBed.createComponent(ProductDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
