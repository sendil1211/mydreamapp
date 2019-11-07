import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualEventComponent } from './annual-event.component';

describe('AnnualEventComponent', () => {
  let component: AnnualEventComponent;
  let fixture: ComponentFixture<AnnualEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
