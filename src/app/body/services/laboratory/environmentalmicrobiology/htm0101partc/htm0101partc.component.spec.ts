import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Htm0101partcComponent } from './htm0101partc.component';

describe('Htm0101partcComponent', () => {
  let component: Htm0101partcComponent;
  let fixture: ComponentFixture<Htm0101partcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Htm0101partcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Htm0101partcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
