import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterResultsComponent } from './semester-results.component';

describe('SemesterResultsComponent', () => {
  let component: SemesterResultsComponent;
  let fixture: ComponentFixture<SemesterResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
