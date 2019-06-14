import { Component } from '@angular/core';
import { ExpensesService } from './expenses/expenses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ExpensesService ]
})
export class AppComponent {
  title = 'budget';
}
