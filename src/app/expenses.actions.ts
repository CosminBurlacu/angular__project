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

  static CREATE_PRODUCT_LOADING: string = 'CREATE_PRODUCT_LOADING';
  static CREATE_PRODUCT_SUCCESS: string = 'CREATE_PRODUCT_SUCCESS';
  static CREATE_PRODUCT_FAILURE: string = 'CREATE_PRODUCT_FAILURE';

  static DELETE_PRODUCT_LOADING: string = "DELETE_PRODUCT_LOADING";
  static DELETE_PRODUCT: string = 'DELETE_PRODUCT';
  static DELETE_PRODUCT_FAILURE: string = 'DELETE_PRODUCT_FAILURE';

  static UPDATE_PRODUCT: string = 'UPDATE_PRODUCT';

  static GET_PRODUCTS_SUCCESS: string = 'GET_PRODUCTS_SUCCESS';
  static GET_PRODUCTS_FAILURE: string = 'GET_PRODUCTS_FAILURE';
  static GET_PRODUCTS_LOADING: string = 'GET_PRODUCTS_LOADING';

  getProducts() {
    this.ngRedux.dispatch({type: ExpensesActions.GET_PRODUCTS_LOADING});

    this.api.getProducts().subscribe(result => {
      console.log(result);
      this.ngRedux.dispatch({
        type: ExpensesActions.GET_PRODUCTS_SUCCESS,
        payload: result})
    }, error=> {
      this.ngRedux.dispatch({
        type: ExpensesActions.GET_PRODUCTS_FAILURE,
        payload: error
      });
    });

  }

  createNewProduct(expense) {
    this.ngRedux.dispatch({
        type: ExpensesActions.CREATE_PRODUCT_LOADING
      });

      this.api.createExpense(expense).subscribe(dataFromWs => {
        this.ngRedux.dispatch({
          type: ExpensesActions.CREATE_PRODUCT_SUCCESS,
          payload: dataFromWs
        });
        this.router.navigate(['/expenses-board/view']);

      }, whatever => {
        this.ngRedux.dispatch({
          type: ExpensesActions.CREATE_PRODUCT_FAILURE,
          payload: whatever
        })
      });

  }
  updateProduct(product) : void {
    this.ngRedux.dispatch({
      type: ExpensesActions.UPDATE_PRODUCT,
      payload: product
    });
  }

  deleteSelectedProduct(id: string) {
    // this.ngRedux.dispatch({
    //   type: ExpensesActions.DELETE_PRODUCT_LOADING
    // });

    // this.api.deleteProduct(id).subscribe(dataFromWs => {
    //   this.ngRedux.dispatch({
    //     type: ExpensesActions.DELETE_PRODUCT_FAILURE,
    //     payload: dataFromWs
    //   });
    //   this.router.navigate(['/expenses-board/view']);
    // });
    this.ngRedux.dispatch({
      type: ExpensesActions.DELETE_PRODUCT,
      payload: id
    });
  }

}
