import {ICategory} from './ICategory';
import {IProduct} from './IProduct';
import {Observable} from 'rxjs';

export  class IProducts {
  totalInBasket: number;
  categories: ICategory[];
  products: IProduct[];
}
