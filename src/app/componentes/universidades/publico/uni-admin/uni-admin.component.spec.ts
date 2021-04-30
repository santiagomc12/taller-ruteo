import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniAdminComponent } from './uni-admin.component';

describe('UniAdminComponent', () => {
  let component: UniAdminComponent;
  let fixture: ComponentFixture<UniAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
