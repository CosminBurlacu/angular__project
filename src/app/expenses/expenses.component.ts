import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses = [
    {
      id: 1,
      expenseName: "expense name",
      expenseDescription: "expense description",
      expensePrice: 45,
      expenseDate: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddExpense() {

  }
}
