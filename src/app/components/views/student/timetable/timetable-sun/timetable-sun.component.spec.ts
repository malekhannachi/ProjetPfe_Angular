import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSunComponent } from './timetable-sun.component';

describe('TimetableSunComponent', () => {
  let component: TimetableSunComponent;
  let fixture: ComponentFixture<TimetableSunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableSunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableSunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
