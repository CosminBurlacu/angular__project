import { Pipe, PipeTransform } from '@angular/core';
// import { Product } from './entities/product';

@Pipe({
  name: 'productFilter'
})
export class ProductPipe implements PipeTransform {

  transform(products, search: any = "") {
    console.log(products);
    console.log(search);


    let result = products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.location.toLowerCase().includes(search.toLowerCase()) ||

      (product.user && (product.user.firstname + " " + product.user.lastname).toLowerCase().includes(search.toLowerCase()))
      );

    return result;
  }

}
