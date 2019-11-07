import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolHolidaysComponent } from './school-holidays.component';

describe('SchoolHolidaysComponent', () => {
  let component: SchoolHolidaysComponent;
  let fixture: ComponentFixture<SchoolHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
