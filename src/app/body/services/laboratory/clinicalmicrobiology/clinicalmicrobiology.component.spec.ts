import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalmicrobiologyComponent } from './clinicalmicrobiology.component';

describe('ClinicalmicrobiologyComponent', () => {
  let component: ClinicalmicrobiologyComponent;
  let fixture: ComponentFixture<ClinicalmicrobiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalmicrobiologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalmicrobiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
