import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailGalleryComponent } from './product-detail-gallery.component';

describe('ProductDetailGalleryComponent', () => {
  let component: ProductDetailGalleryComponent;
  let fixture: ComponentFixture<ProductDetailGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailGalleryComponent]
    });
    fixture = TestBed.createComponent(ProductDetailGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
