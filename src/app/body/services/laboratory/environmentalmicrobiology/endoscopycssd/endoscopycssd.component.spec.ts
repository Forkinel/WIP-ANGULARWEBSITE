import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoscopycssdComponent } from './endoscopycssd.component';

describe('EndoscopycssdComponent', () => {
  let component: EndoscopycssdComponent;
  let fixture: ComponentFixture<EndoscopycssdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndoscopycssdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndoscopycssdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
