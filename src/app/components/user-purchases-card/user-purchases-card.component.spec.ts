import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchasesCardComponent } from './user-purchases-card.component';

describe('UserPurchasesCardComponent', () => {
  let component: UserPurchasesCardComponent;
  let fixture: ComponentFixture<UserPurchasesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPurchasesCardComponent]
    });
    fixture = TestBed.createComponent(UserPurchasesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
