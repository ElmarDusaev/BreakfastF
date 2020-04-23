import {Observable} from 'rxjs';

export interface IBasketReuslt {
  inBasket: Observable<number>;
  totalInBasket: number;
}
