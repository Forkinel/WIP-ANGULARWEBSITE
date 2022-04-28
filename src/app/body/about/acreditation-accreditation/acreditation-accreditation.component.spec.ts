import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditationAccreditationComponent } from './acreditation-accreditation.component';

describe('AcreditationAccreditationComponent', () => {
  let component: AcreditationAccreditationComponent;
  let fixture: ComponentFixture<AcreditationAccreditationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcreditationAccreditationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreditationAccreditationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
