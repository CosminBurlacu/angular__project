import { ExpensesActions } from './expenses.actions';
import { tassign } from 'tassign';
import { ExpenseState } from './store';

const INITIAL_STATE: ExpenseState = {isLoggedIn: undefined, expenses: [], isLoading: false };

export function expensesReducer(state: ExpenseState = INITIAL_STATE, action:any) {
  switch (action.type) {
  case ExpensesActions.LOG_IN:
    console.log(action.payload);
    return tassign(state, { isLoggedIn: action.payload });

  case ExpensesActions.GET_EXPENSES_LOADING:
    return tassign(state, {isLoading: true});

  case ExpensesActions.GET_EXPENSES_SUCCESS:
    console.log("GET_PRODUCTS_SUCCESS: ", action.payload);
    return tassign(state, {expenses: action.payload, isLoading: false });

  case ExpensesActions.GET_EXPENSES_FAILURE:
    console.log(action.payload);
    return tassign(state, {isLoading: false});

  case ExpensesActions.CREATE_EXPENSE_FAILURE:
    return state;

  case ExpensesActions.CREATE_EXPENSE_LOADING:
    return tassign(state, {isLoading: true});

  case ExpensesActions.CREATE_EXPENSE_SUCCESS:
    console.log(state);
    let newProducts = [...state.expenses, action.payload];
    let newState = tassign(state, {expenses: newProducts});
    console.log(newState);
    return newState;

  case ExpensesActions.UPDATE_EXPENSE:
    let stateUpdate = [...state.expenses];
    let index = stateUpdate.findIndex(prod => prod._id === action.payload._id);
    stateUpdate[index] = action.payload;
    return tassign(state, {expenses: stateUpdate} );

  case ExpensesActions.DELETE_EXPENSE:
    let newProductsAfterDelete = state.expenses.filter(product => product.id !== action.payload);
    return tassign(state, { expenses: newProductsAfterDelete });

    default:
    return state;
}
}
