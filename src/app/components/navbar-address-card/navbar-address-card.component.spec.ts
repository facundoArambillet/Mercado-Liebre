import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAddressCardComponent } from './navbar-address-card.component';

describe('NavbarAddressCardComponent', () => {
  let component: NavbarAddressCardComponent;
  let fixture: ComponentFixture<NavbarAddressCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAddressCardComponent]
    });
    fixture = TestBed.createComponent(NavbarAddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
