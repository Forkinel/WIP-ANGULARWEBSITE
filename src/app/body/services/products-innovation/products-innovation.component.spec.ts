import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInnovationComponent } from './products-innovation.component';

describe('ProductsInnovationComponent', () => {
  let component: ProductsInnovationComponent;
  let fixture: ComponentFixture<ProductsInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsInnovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
