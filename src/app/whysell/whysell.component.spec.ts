import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhysellComponent } from './whysell.component';

describe('WhysellComponent', () => {
  let component: WhysellComponent;
  let fixture: ComponentFixture<WhysellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhysellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhysellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
