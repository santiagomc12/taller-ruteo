import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniPrincipalComponent } from './uni-principal.component';

describe('UniPrincipalComponent', () => {
  let component: UniPrincipalComponent;
  let fixture: ComponentFixture<UniPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
