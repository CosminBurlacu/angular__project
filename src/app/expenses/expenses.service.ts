export class ExpensesService {
  expenses = [
    // {
    //   id: "exp1",
    //   expenseName: "exp1n",
    //   expenseDescription: "exp1d",
    //   expensePrice: 45,
    //   expenseDate: new Date()
    // }
  ];

  addNewExpense(expenseElement:
    {
      id: string,
      expenseName: string,
      expenseDescription: string,
      expensePrice: number,
      expenseDate: Date
    }) {
    this.expenses.push(expenseElement);
    console.log(this.expenses)
    console.log("addexpense__service");
  }

  updateIndividualExpense(id: string, element: {expenseName: string, expenseDescription: string, expensePrice: number, expenseDate: Date}) {
    this.expenses.map((expense) => {
      if(expense.id === id) {
        console.log("updated__________datas: ", {...expense, ...element})
        return {...expense, ...element}
      }
    })
  }

  removeIndividualExpense(id: string) {
    for(let i = 0; i < this.expenses.length; i++) {
      if(this.expenses[i].id === id) {
        this.expenses.splice(i, 1);
      }
    }
    console.log("delete__service");
  }
}
