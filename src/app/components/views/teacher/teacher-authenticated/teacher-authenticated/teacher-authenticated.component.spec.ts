import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAuthenticatedComponent } from './teacher-authenticated.component';

describe('TeacherAuthenticatedComponent', () => {
  let component: TeacherAuthenticatedComponent;
  let fixture: ComponentFixture<TeacherAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAuthenticatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
