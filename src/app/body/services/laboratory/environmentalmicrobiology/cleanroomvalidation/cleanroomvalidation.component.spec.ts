import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanroomvalidationComponent } from './cleanroomvalidation.component';

describe('CleanroomvalidationComponent', () => {
  let component: CleanroomvalidationComponent;
  let fixture: ComponentFixture<CleanroomvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanroomvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanroomvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
