import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsResearchComponent } from './projects-research.component';

describe('ProjectsResearchComponent', () => {
  let component: ProjectsResearchComponent;
  let fixture: ComponentFixture<ProjectsResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
