import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { ExpensesApiService } from './expenses/expenses-api.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class ExpensesActions {
constructor (
  private ngRedux: NgRedux<AppState>, private api: ExpensesApiService,
  private router: Router) {}

  static LOG_IN: string = 'LOG_IN';

  static CREATE_EXPENSE_LOADING: string = 'CREATE_EXPENSE_LOADING';
  static CREATE_EXPENSE_SUCCESS: string = 'CREATE_EXPENSE_SUCCESS';
  static CREATE_EXPENSE_FAILURE: string = 'CREATE_EXPENSE_FAILURE';

  static DELETE_EXPENSE: string = 'DELETE_EXPENSE';

  static UPDATE_EXPENSE: string = 'UPDATE_EXPENSE';

  static GET_EXPENSES_SUCCESS: string = 'GET_EXPENSES_SUCCESS';
  static GET_EXPENSES_FAILURE: string = 'GET_EXPENSES_FAILURE';
  static GET_EXPENSES_LOADING: string = 'GET_EXPENSES_LOADING';

  getProducts() {
    this.ngRedux.dispatch({type: ExpensesActions.GET_EXPENSES_LOADING});

    this.api.getProducts().subscribe(result => {
      // console.log(result);
      this.ngRedux.dispatch({
        type: ExpensesActions.GET_EXPENSES_SUCCESS,
        payload: result})
    }, error=> {
      this.ngRedux.dispatch({
        type: ExpensesActions.GET_EXPENSES_FAILURE,
        payload: error
      });
    });

  }

  createNewExpense(expense) {
    this.ngRedux.dispatch({
        type: ExpensesActions.CREATE_EXPENSE_LOADING
      });

      this.api.createExpense(expense).subscribe(dataAPI => {
        this.ngRedux.dispatch({
          type: ExpensesActions.CREATE_EXPENSE_SUCCESS,
          payload: dataAPI
        });
        this.router.navigate(['/expenses-board/view']);

      }, whatever => {
        this.ngRedux.dispatch({
          type: ExpensesActions.CREATE_EXPENSE_FAILURE,
          payload: whatever
        })
      });

  }

  updateSelectedExpense(expense) {
    console.log("update_________expense: ", expense)
    this.api.updateExpense(expense).subscribe(dataAPI => {
      console.log("dataAPI________dataAPI:", dataAPI)
      this.ngRedux.dispatch({
        type: ExpensesActions.UPDATE_EXPENSE,
        payload: dataAPI.value
      });
    })
  }

  deleteSelectedProduct(id: string) {
    this.api.deleteProduct(id);
      // console.log("deleteSelectedProduct____________actions", id);
      this.ngRedux.dispatch({
        type: ExpensesActions.DELETE_EXPENSE,
        payload: id
      });
  }

}
