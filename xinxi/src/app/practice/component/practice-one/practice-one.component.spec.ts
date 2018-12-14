import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeOneComponent } from './practice-one.component';

describe('PracticeOneComponent', () => {
  let component: PracticeOneComponent;
  let fixture: ComponentFixture<PracticeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
