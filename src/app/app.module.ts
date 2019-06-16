// import { ProductPipe } from './expenses/view-expenses/filter.pipe';
import { AppState, rootReducer, store } from './store';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule, MatTooltipModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CreateExpensesComponent } from './expenses/create-expenses/create-expenses.component';
import { ViewExpensesComponent } from './expenses/view-expenses/view-expenses.component';
import { UpdateExpensesComponent } from './expenses/update-expenses/update-expenses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms';
import { MatDividerModule, MatCardModule, MatSnackBarModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule, MatNativeDateModule } from '@angular/material';
import { ExpenseElementComponent } from './expenses/view-expenses/expense-element/expense-element.component';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { HttpClientModule } from '@angular/common/http';
import { FiltersPipe } from './expenses/filters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExpensesComponent,
    CreateExpensesComponent,
    ViewExpensesComponent,
    UpdateExpensesComponent,
    PageNotFoundComponent,
    SidebarComponent,
    ExpenseElementComponent,
    // ProductPipe,
    FiltersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule, NgReduxRouterModule.forRoot(),
    MatGridListModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatCardModule, MatDividerModule, MatTooltipModule, MatNativeDateModule, MatDatepickerModule, MatProgressBarModule
    // MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule
  ],
  providers: [FiltersPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.provideStore(store);
  }
  // constructor(private ngRedux: NgRedux<AppState>,
  //   private devTool: DevToolsExtension,
  //   private ngReduxRouter: NgReduxRouter,) {

  //     // this.ngRedux.configureStore(
  //     //   rootReducer,
  //     //   {},[ devTool.isEnabled() ? devTool.enhancer() : f => f]);


  //   // this.ngRedux.configureStore(rootReducer, {});
  //   this.ngRedux.configureStore(store, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

  //     ngReduxRouter.initialize(/* args */);
  // }
}
