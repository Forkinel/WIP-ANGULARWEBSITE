import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCpdComponent } from './training-cpd.component';

describe('TrainingCpdComponent', () => {
  let component: TrainingCpdComponent;
  let fixture: ComponentFixture<TrainingCpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
