import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextsaleComponent } from './nextsale.component';

describe('NextsaleComponent', () => {
  let component: NextsaleComponent;
  let fixture: ComponentFixture<NextsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
