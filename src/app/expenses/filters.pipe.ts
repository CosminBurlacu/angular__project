import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(exp: any, term: any): any {
    if(term === undefined) {
      return exp;
    }

    return exp.filter((expense) => {
      return expense.expenseName.toLowerCase().includes(term.toLowerCase());
    })
    // return null;
  }

}
