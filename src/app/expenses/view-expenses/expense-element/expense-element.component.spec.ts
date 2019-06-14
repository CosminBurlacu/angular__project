import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseElementComponent } from './expense-element.component';

describe('ExpenseElementComponent', () => {
  let component: ExpenseElementComponent;
  let fixture: ComponentFixture<ExpenseElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
