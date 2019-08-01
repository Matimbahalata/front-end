import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandyComponent } from './mandy.component';

describe('MandyComponent', () => {
  let component: MandyComponent;
  let fixture: ComponentFixture<MandyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
