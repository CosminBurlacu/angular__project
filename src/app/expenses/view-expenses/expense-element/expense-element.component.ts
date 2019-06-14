import { ExpensesService } from './../../expenses.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expense-element',
  templateUrl: './expense-element.component.html',
  styleUrls: ['./expense-element.component.scss']
})
export class ExpenseElementComponent implements OnInit {
  @Input("exp") expense: {id: number, expenseName: string, expenseDescription: string, expensePrice: number, expenseDate: Date};
  @Input("expenseId") expenseId: string;

  constructor(private router: Router,
              private expensesService: ExpensesService
  ) { }

  ngOnInit() {
  }

  onEditExpenseRedirect() {
    this.router.navigate(["/expenses-board/edit/", this.expenseId])
  }

  onDeleteExpense() {
    this.expensesService.removeIndividualExpense(this.expenseId);
  }
}
