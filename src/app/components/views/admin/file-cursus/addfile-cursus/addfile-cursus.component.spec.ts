import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfileCursusComponent } from './addfile-cursus.component';

describe('AddfileCursusComponent', () => {
  let component: AddfileCursusComponent;
  let fixture: ComponentFixture<AddfileCursusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfileCursusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfileCursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
