import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Http403TipComponent } from './http403-tip.component';

describe('Http403TipComponent', () => {
  let component: Http403TipComponent;
  let fixture: ComponentFixture<Http403TipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http403TipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http403TipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
