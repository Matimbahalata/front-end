import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NothandoComponent } from './nothando.component';

describe('NothandoComponent', () => {
  let component: NothandoComponent;
  let fixture: ComponentFixture<NothandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NothandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NothandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
