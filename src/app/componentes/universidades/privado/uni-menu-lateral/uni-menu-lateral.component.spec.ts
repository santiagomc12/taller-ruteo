import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniMenuLateralComponent } from './uni-menu-lateral.component';

describe('UniMenuLateralComponent', () => {
  let component: UniMenuLateralComponent;
  let fixture: ComponentFixture<UniMenuLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniMenuLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniMenuLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
