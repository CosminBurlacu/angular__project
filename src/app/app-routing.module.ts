import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateExpensesComponent } from './expenses/update-expenses/update-expenses.component';
import { CreateExpensesComponent } from './expenses/create-expenses/create-expenses.component';
import { ViewExpensesComponent } from './expenses/view-expenses/view-expenses.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo:"login" },
  { path: "login", pathMatch: "full", component: LoginComponent },
  { path: "register", pathMatch: "full", component: RegisterComponent },
  { path: "expenses-board", component: ExpensesComponent, /*canActivate: [AuthGuard],*/ children: [
    { path: "view", component: ViewExpensesComponent },
    { path: "create", pathMatch: "full", component: CreateExpensesComponent },
    { path: "edit/:id", pathMatch: "full", component: UpdateExpensesComponent }
  ] },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
