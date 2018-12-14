import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeThreeComponent } from './practice-three.component';

describe('PracticeThreeComponent', () => {
  let component: PracticeThreeComponent;
  let fixture: ComponentFixture<PracticeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
