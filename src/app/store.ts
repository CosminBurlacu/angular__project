import { routerReducer } from '@angular-redux/router';
import { combineReducers, Store, createStore } from 'redux';
import { expensesReducer } from './expenses.reducer';

export class ExpenseState {
  expenses: any[];
  isLoggedIn: boolean; // Should be in an auth section and not in products
  isLoading: boolean;
}
export class AppState {
  expenses?: ExpenseState;
}
export const rootReducer = combineReducers<AppState>({
  expenses: expensesReducer,

  router: routerReducer
} as any);

export const store: Store<AppState> = createStore(
  rootReducer
);
