import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkNavComponent } from './link-nav.component';

describe('LinkNavComponent', () => {
  let component: LinkNavComponent;
  let fixture: ComponentFixture<LinkNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
