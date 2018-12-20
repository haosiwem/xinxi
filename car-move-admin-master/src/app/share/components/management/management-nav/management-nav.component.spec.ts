import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementNavComponent } from './management-nav.component';

describe('ManagementNavComponent', () => {
  let component: ManagementNavComponent;
  let fixture: ComponentFixture<ManagementNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
