import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTutoratComponent } from './timetable-tutorat.component';

describe('TimetableTutoratComponent', () => {
  let component: TimetableTutoratComponent;
  let fixture: ComponentFixture<TimetableTutoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableTutoratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTutoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
