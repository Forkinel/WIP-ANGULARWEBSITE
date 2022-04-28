import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalmonitoringComponent } from './environmentalmonitoring.component';

describe('EnvironmentalmonitoringComponent', () => {
  let component: EnvironmentalmonitoringComponent;
  let fixture: ComponentFixture<EnvironmentalmonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalmonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalmonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
