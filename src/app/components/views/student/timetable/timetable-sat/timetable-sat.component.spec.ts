import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSatComponent } from './timetable-sat.component';

describe('TimetableSatComponent', () => {
  let component: TimetableSatComponent;
  let fixture: ComponentFixture<TimetableSatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableSatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
