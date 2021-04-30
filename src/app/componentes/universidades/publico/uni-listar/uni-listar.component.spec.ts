import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniListarComponent } from './uni-listar.component';

describe('UniListarComponent', () => {
  let component: UniListarComponent;
  let fixture: ComponentFixture<UniListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
