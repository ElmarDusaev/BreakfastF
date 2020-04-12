import {Observable} from 'rxjs';

export class IProduct {
  id: number;
  name: string;
  stars: number;
  price: number;
  image: string;
  categoryId: number;
  status: number;
  inBasket: Observable<number>;
}
