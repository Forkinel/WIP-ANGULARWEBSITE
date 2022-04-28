import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesctestingComponent } from './cesctesting.component';

describe('CesctestingComponent', () => {
  let component: CesctestingComponent;
  let fixture: ComponentFixture<CesctestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CesctestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CesctestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
