import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisTrationComponent } from './regis-tration.component';

describe('RegisTrationComponent', () => {
  let component: RegisTrationComponent;
  let fixture: ComponentFixture<RegisTrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisTrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisTrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
