import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RASTAComponent } from './rasta.component';

describe('RASTAComponent', () => {
  let component: RASTAComponent;
  let fixture: ComponentFixture<RASTAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RASTAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RASTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
