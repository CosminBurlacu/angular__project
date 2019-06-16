import { ExpensesActions } from './../../expenses.actions';
import { AppState } from './../../store';
import { NgRedux } from '@angular-redux/store';
import { ExpensesService } from './../expenses.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-expenses',
  templateUrl: './create-expenses.component.html',
  styleUrls: ['./create-expenses.component.scss'],
  providers: [ ]
})
export class CreateExpensesComponent implements OnInit {
  expenseForm: FormGroup;
  // @Output() expenseAdded = new EventEmitter<{}>();
  expenseId: any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private expensesService: ExpensesService,
              private ngRedux: NgRedux<AppState>,
              private prodActions: ExpensesActions
  ) { }

  ngOnInit() {
    this.ngRedux.select(state => state.expenses).subscribe(response => {
      this.expenseId = response.expenses.length
      console.log("view________expenses: ", this.expenseId.length);
    })

    this.expenseForm = this.fb.group({
      id: `exp${this.expenseId + 1}`,
      expenseName: ['', Validators.required],
      expenseDescription: ['',Validators.required],
      expensePrice: ['',Validators.required],
      expenseDate: ['',Validators.required]
    });
  }

  onSubmitExpense() {
    this.prodActions.createNewProduct(this.expenseForm.value);
    this.router.navigate(["/expenses-board/view"]);
  }
}
