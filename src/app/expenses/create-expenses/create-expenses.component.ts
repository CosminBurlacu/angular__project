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
  expenseId = this.expensesService.expenses;

  constructor(private fb: FormBuilder,
              private router: Router,
              private expensesService: ExpensesService
  ) { }

  ngOnInit() {
    this.expenseForm = this.fb.group({
      id: `exp${this.expenseId.length + 1}`,
      expenseName: ['', Validators.required],
      expenseDescription: ['',Validators.required],
      expensePrice: ['',Validators.required],
      expenseDate: ['',Validators.required]
    });
  }

  onSubmitExpense() {
    this.expensesService.addNewExpense(this.expenseForm.value);
    this.router.navigate(["/expenses-board/view"]);
  }
}
