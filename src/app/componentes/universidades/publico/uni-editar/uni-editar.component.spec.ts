import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniEditarComponent } from './uni-editar.component';

describe('UniEditarComponent', () => {
  let component: UniEditarComponent;
  let fixture: ComponentFixture<UniEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
