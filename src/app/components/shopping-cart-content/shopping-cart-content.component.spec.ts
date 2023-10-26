import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartContentComponent } from './shopping-cart-content.component';

describe('ShoppingCartContentComponent', () => {
  let component: ShoppingCartContentComponent;
  let fixture: ComponentFixture<ShoppingCartContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartContentComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
