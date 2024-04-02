import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignotpComponent } from './signotp.component';

describe('SignotpComponent', () => {
  let component: SignotpComponent;
  let fixture: ComponentFixture<SignotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignotpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
