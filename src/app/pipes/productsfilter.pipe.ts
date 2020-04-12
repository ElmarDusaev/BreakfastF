import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from '../models/IProduct';

@Pipe({
  name: 'productsfilter'
})
export class ProductsfilterPipe implements PipeTransform {

  transform(value: IProduct[], id: any): IProduct[] {
    console.log(id);
    if(id === 0) return value;
    return value.filter(a => a.categoryId === id);
  }

}
