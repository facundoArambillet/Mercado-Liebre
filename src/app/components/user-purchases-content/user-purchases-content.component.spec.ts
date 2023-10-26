import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchasesContentComponent } from './user-purchases-content.component';

describe('UserPurchasesContentComponent', () => {
  let component: UserPurchasesContentComponent;
  let fixture: ComponentFixture<UserPurchasesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPurchasesContentComponent]
    });
    fixture = TestBed.createComponent(UserPurchasesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
