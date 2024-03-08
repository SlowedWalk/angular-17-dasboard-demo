import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestInvoicesComponent } from './latest-invoices.component';

describe('LatestInvoicesComponent', () => {
  let component: LatestInvoicesComponent;
  let fixture: ComponentFixture<LatestInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
