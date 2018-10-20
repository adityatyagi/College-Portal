import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSetupComponent } from './navbar-setup.component';

describe('NavbarSetupComponent', () => {
  let component: NavbarSetupComponent;
  let fixture: ComponentFixture<NavbarSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
