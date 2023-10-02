import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedPurchaseComponent } from './protected-purchase.component';

describe('ProtectedPurchaseComponent', () => {
  let component: ProtectedPurchaseComponent;
  let fixture: ComponentFixture<ProtectedPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectedPurchaseComponent]
    });
    fixture = TestBed.createComponent(ProtectedPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
