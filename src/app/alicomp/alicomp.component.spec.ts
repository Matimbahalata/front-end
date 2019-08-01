import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlicompComponent } from './alicomp.component';

describe('AlicompComponent', () => {
  let component: AlicompComponent;
  let fixture: ComponentFixture<AlicompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlicompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
