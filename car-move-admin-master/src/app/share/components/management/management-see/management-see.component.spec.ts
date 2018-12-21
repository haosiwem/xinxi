import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSeeComponent } from './management-see.component';

describe('ManagementSeeComponent', () => {
  let component: ManagementSeeComponent;
  let fixture: ComponentFixture<ManagementSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
