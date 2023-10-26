import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOffertsComponent } from './product-offerts.component';

describe('ProductOffertsComponent', () => {
  let component: ProductOffertsComponent;
  let fixture: ComponentFixture<ProductOffertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOffertsComponent]
    });
    fixture = TestBed.createComponent(ProductOffertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
