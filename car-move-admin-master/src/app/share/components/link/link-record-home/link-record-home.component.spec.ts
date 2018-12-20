import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRecordHomeComponent } from './link-record-home.component';

describe('LinkRecordHomeComponent', () => {
  let component: LinkRecordHomeComponent;
  let fixture: ComponentFixture<LinkRecordHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkRecordHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRecordHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
