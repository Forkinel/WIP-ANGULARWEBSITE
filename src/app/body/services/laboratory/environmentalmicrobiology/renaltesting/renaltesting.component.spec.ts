import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenaltestingComponent } from './renaltesting.component';

describe('RenaltestingComponent', () => {
  let component: RenaltestingComponent;
  let fixture: ComponentFixture<RenaltestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenaltestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenaltestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
