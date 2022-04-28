import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaldevicesComponent } from './medicaldevices.component';

describe('MedicaldevicesComponent', () => {
  let component: MedicaldevicesComponent;
  let fixture: ComponentFixture<MedicaldevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicaldevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicaldevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
