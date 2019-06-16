import { expensesReducer } from "./expenses.reducer";


describe('expenses reducer', () => {

  it('should return the default state of the expenses reducer', () => {
  expect(expensesReducer(undefined, {})).toEqual(
    {isLoggedIn: undefined, expenses: [], isLoading: false });
 });

//  it('should add a new product', () => {
//   let stateBefore = {expenses: []} as ExpenseState;
//   deepFreeze(stateBefore);

//   let expense = {
//     id: "exp45",
//     expenseName: "expenseName",
//     expenseDescription: "expenseDescription",
//     expensePrice: 45,
//     expenseDate: new Date()
//   }

//   let stateAfter = {expenses: [expense]};

//   let response = expensesReducer(stateBefore, {type: types.ExpensesActions.CREATE_PRODUCT_SUCCESS, payload: expense});
//   expect(stateAfter).toEqual(response);
// });

})
