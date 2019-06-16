import { ExpensesApiService } from './../expenses-api.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './../../store';
import { ExpensesActions } from './../../expenses.actions';
import { ExpensesService } from './../expenses.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FiltersPipe } from "../filters.pipe";

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.component.html',
  styleUrls: ['./view-expenses.component.scss']
  // pipes: [ FiltersPipe ]
})
export class ViewExpensesComponent implements OnInit, OnChanges {
  expenses: {id: string, expenseName: string, expenseDescription: string, expensePrice: number, expenseDate: Date}[] = [];
  exp: any;
  filteredExpenses: any;
  inputValue: string;
  searchText: string;
  search: string;
  // datas: any;
  constructor(private expensesService: ExpensesService,
              private ngRedux: NgRedux<AppState>,
              private expenseActions: ExpensesActions,
              private service: ExpensesApiService
  ) { }

  ngOnInit() {
    this.expenseActions.getProducts();
    this.ngRedux.select(state => state.expenses).subscribe(response => {
      this.expensesService.expenses = response.expenses
      if(this.expensesService.expenses) {
        this.exp = this.expensesService.expenses;
      }
      console.log("view________expenses: ", this.exp);
    })
    this.filter(this.inputValue);
  }

  ngOnChanges() {
    this.expenseActions.getProducts();
    this.ngRedux.select(state => state.expenses).subscribe(response => {
      this.expensesService.expenses = response.expenses
      this.exp = this.expensesService.expenses;
      console.log("view________expenses: ", this.exp);
    })
  }

  onDeleteExpense() {
    // this.expenseActions.deleteProduct();
  }

  filter(data: string) {
    console.log(this.filteredExpenses)
    if (data) {
      this.filteredExpenses = this.exp.filter((ex) => {
          return ex.expenseName.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
    } else {
      this.filteredExpenses = this.exp;
    }
  }
}
