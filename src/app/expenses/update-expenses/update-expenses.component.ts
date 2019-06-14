import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-update-expenses',
  templateUrl: './update-expenses.component.html',
  styleUrls: ['./update-expenses.component.scss']
})
export class UpdateExpensesComponent implements OnInit {
  expenseId: string;
  expenseToUpdate: any = {};
  expenseUpdatedForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private expensesService: ExpensesService,
              private fb: FormBuilder
  ) { }

  ngOnInit() {
    // get update expense form datas
    this.expenseUpdatedForm = this.fb.group({
      expenseName: ['', Validators.required],
      expenseDescription: ['',Validators.required],
      expensePrice: ['',Validators.required],
      expenseDate: ['',Validators.required]
    });

    // store the expense id value
    let id = this.route.snapshot.paramMap.get("id");
    this.expenseId = id;

    // filter correct expense object element
    const filteredData = this.expensesService.expenses.filter((expense) => {
      return expense.id === this.expenseId;
    })

    this.expenseToUpdate = filteredData[0];
    console.log(this.expenseToUpdate);
  }

  onUpdateExpense() {
    // console.log("updatedexpense__value: ", this.expenseUpdatedForm);
    this.expensesService.updateIndividualExpense(this.expenseId, this.expenseUpdatedForm.value);
  }
}
