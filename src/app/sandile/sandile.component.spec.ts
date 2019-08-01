import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandileComponent } from './sandile.component';

describe('SandileComponent', () => {
  let component: SandileComponent;
  let fixture: ComponentFixture<SandileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
