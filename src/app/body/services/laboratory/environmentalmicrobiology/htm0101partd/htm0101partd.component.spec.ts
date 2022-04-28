import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Htm0101partdComponent } from './htm0101partd.component';

describe('Htm0101partdComponent', () => {
  let component: Htm0101partdComponent;
  let fixture: ComponentFixture<Htm0101partdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Htm0101partdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Htm0101partdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
