import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTwoComponent } from './practice-two.component';

describe('PracticeTwoComponent', () => {
  let component: PracticeTwoComponent;
  let fixture: ComponentFixture<PracticeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
