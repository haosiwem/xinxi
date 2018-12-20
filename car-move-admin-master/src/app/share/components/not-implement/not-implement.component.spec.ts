import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotImplementComponent } from './not-implement.component';

describe('NotImplementComponent', () => {
  let component: NotImplementComponent;
  let fixture: ComponentFixture<NotImplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotImplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
