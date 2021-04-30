import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniCrearComponent } from './uni-crear.component';

describe('UniCrearComponent', () => {
  let component: UniCrearComponent;
  let fixture: ComponentFixture<UniCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
