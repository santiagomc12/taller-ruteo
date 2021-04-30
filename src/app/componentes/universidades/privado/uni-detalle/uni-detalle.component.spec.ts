import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniDetalleComponent } from './uni-detalle.component';

describe('UniDetalleComponent', () => {
  let component: UniDetalleComponent;
  let fixture: ComponentFixture<UniDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
