import { ExpensesService } from './../expenses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.component.html',
  styleUrls: ['./view-expenses.component.scss'],
  providers: [ ]
})
export class ViewExpensesComponent implements OnInit {
  expenses: {id: string, expenseName: string, expenseDescription: string, expensePrice: number, expenseDate: Date}[] = [];

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.expenses = this.expensesService.expenses;
    console.log(this.expenses);
  }

}
