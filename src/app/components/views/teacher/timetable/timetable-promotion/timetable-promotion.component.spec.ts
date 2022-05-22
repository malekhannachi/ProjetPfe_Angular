import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablePromotionComponent } from './timetable-promotion.component';

describe('TimetablePromotionComponent', () => {
  let component: TimetablePromotionComponent;
  let fixture: ComponentFixture<TimetablePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetablePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetablePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
