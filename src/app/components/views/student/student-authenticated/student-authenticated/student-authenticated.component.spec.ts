import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAuthenticatedComponent } from './student-authenticated.component';

describe('StudentAuthenticatedComponent', () => {
  let component: StudentAuthenticatedComponent;
  let fixture: ComponentFixture<StudentAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAuthenticatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
