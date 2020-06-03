import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoLIstComponent } from './to-do-list.component';

describe('ToDoLIstComponent', () => {
  let component: ToDoLIstComponent;
  let fixture: ComponentFixture<ToDoLIstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoLIstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
