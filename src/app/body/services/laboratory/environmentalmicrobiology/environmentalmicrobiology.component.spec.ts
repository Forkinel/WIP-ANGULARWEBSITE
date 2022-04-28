import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalmicrobiologyComponent } from './environmentalmicrobiology.component';

describe('EnvironmentalmicrobiologyComponent', () => {
  let component: EnvironmentalmicrobiologyComponent;
  let fixture: ComponentFixture<EnvironmentalmicrobiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalmicrobiologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalmicrobiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
