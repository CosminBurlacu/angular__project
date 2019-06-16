import { ExpensesActions } from './expenses.actions';
import { tassign } from 'tassign';
import { ExpenseState } from './store';
// import { Product } from '../entities/product';
// import { TempDataService } from '../services/temp-data.service';

// State at startup.
// const ds = new TempDataService();
const INITIAL_STATE: ExpenseState = {isLoggedIn: undefined, expenses: [], isLoading: false };

export function expensesReducer(state: ExpenseState = INITIAL_STATE, action:any) {

  switch (action.type) {
  case ExpensesActions.LOG_IN:
    console.log(action.payload);

    return tassign(state, { isLoggedIn: action.payload });

  case ExpensesActions.GET_PRODUCTS_LOADING:
    return tassign(state, {isLoading: true});

  case ExpensesActions.GET_PRODUCTS_SUCCESS:
    console.log("GET_PRODUCTS_SUCCESS: ", action.payload);
    return tassign(state, {expenses: action.payload, isLoading: false });

  case ExpensesActions.GET_PRODUCTS_FAILURE:
    console.log(action.payload);
    return tassign(state, {isLoading: false});



  case ExpensesActions.CREATE_PRODUCT_FAILURE:
    // display an error message
    return state;

  case ExpensesActions.CREATE_PRODUCT_LOADING:
    return tassign(state, {isLoading: true});

  case ExpensesActions.CREATE_PRODUCT_SUCCESS:
    // Create a new array with the "old array" and the new product
    console.log(state);

    let newProducts = [...state.expenses, action.payload];
    let newState = tassign(state, {expenses: newProducts});
    console.log(newState);
    return newState;


  case ExpensesActions.UPDATE_PRODUCT:
    //action.payload is a product object




    let stateUpdate = [...state.expenses];
    let index = stateUpdate.findIndex(prod => prod._id === action.payload._id);
    stateUpdate[index] = action.payload;
    return tassign(state, {expenses: stateUpdate} );


    // let stateAfter = [...stateUpdate.slice(0,index), action.payload, stateUpdate.slice(index+1)];




  case ExpensesActions.DELETE_PRODUCT:
    // action.payload should be productId (_id)

    let newProductsAfterDelete = state.expenses.filter(product => product.id !== action.payload);
    return tassign(state, { expenses: newProductsAfterDelete });

  // case ProductActions.LOG_IN:
    // return tassign(state, { isBaby: action.payload });

    // case ProductActions.LOG_IN:
    // return tassign(state, { isBaby: action.payload });
    default:
    return state;
}
}
