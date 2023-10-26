import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressCreateComponent } from './user-address-create.component';

describe('UserAddressCreateComponent', () => {
  let component: UserAddressCreateComponent;
  let fixture: ComponentFixture<UserAddressCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddressCreateComponent]
    });
    fixture = TestBed.createComponent(UserAddressCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
