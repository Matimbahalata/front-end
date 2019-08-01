import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlahlaComponent } from './nhlahla.component';

describe('NhlahlaComponent', () => {
  let component: NhlahlaComponent;
  let fixture: ComponentFixture<NhlahlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhlahlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhlahlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
