import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotablewaterservicesComponent } from './potablewaterservices.component';

describe('PotablewaterservicesComponent', () => {
  let component: PotablewaterservicesComponent;
  let fixture: ComponentFixture<PotablewaterservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotablewaterservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotablewaterservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
