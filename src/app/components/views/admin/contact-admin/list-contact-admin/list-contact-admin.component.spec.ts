import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactAdminComponent } from './list-contact-admin.component';

describe('ListContactAdminComponent', () => {
  let component: ListContactAdminComponent;
  let fixture: ComponentFixture<ListContactAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContactAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
