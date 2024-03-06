import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeLogoComponent } from './acme-logo.component';

describe('AcmeLogoComponent', () => {
  let component: AcmeLogoComponent;
  let fixture: ComponentFixture<AcmeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcmeLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcmeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
