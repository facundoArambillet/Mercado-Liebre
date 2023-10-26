import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSidebarComponent } from './shopping-cart-sidebar.component';

describe('ShoppingCartSidebarComponent', () => {
  let component: ShoppingCartSidebarComponent;
  let fixture: ComponentFixture<ShoppingCartSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartSidebarComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
