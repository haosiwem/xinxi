import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http500TipComponent } from './http500-tip.component';

describe('Http500TipComponent', () => {
  let component: Http500TipComponent;
  let fixture: ComponentFixture<Http500TipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http500TipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http500TipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
