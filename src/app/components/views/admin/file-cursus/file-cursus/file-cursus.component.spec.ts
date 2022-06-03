import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCursusComponent } from './file-cursus.component';

describe('FileCursusComponent', () => {
  let component: FileCursusComponent;
  let fixture: ComponentFixture<FileCursusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileCursusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileCursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
