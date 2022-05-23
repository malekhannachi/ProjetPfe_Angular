import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeCursusComponent } from './list-demande-cursus.component';

describe('ListDemandeCursusComponent', () => {
  let component: ListDemandeCursusComponent;
  let fixture: ComponentFixture<ListDemandeCursusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDemandeCursusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandeCursusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
