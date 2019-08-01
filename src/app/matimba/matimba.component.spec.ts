import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatimbaComponent } from './matimba.component';

describe('MatimbaComponent', () => {
  let component: MatimbaComponent;
  let fixture: ComponentFixture<MatimbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatimbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatimbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
