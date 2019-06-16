import { Injectable } from '@angular/core';
// import { Product } from '../entities/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
// import { Gender } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class ExpensesApiService {
  // baseUrl: string = 'http://localhost:3001/view';
  // baseUrlCreate: string = 'http://localhost:3001/create';
  // baseUrlDelete: string = "http://localhost:3001/delete/";
  baseUrl: string = "http://localhost:3001";
  baseUrlUpdate: string = "http://localhost:3001/update";
  constructor(private http: HttpClient) { }

  getProducts() : Observable<[]>{
    return this.http.get(this.baseUrl + "/view") as Observable<[]>;
  }

  createExpense(expense) : Observable<any> {
    return this.http.post(this.baseUrl + "/create", expense);
  }

  updateExpense(expenseElement): Observable<any> {
    console.log("update___________action: ", expenseElement)
    return this.http.put(this.baseUrlUpdate, expenseElement)
  }

  deleteProduct(productId: string) {
    console.log(productId);
    console.log("expense-api.service.ts____________delete");
    this.http.delete(`${this.baseUrl}/delete/${productId}`);
  }
}
