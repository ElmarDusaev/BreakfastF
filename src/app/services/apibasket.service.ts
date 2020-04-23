import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {GlobalConstants} from '../common/GlobalConstants';
import {IBasket} from '../models/IBasket';
import {IBasketReuslt} from '../models/IBasketReuslt';

@Injectable({
  providedIn: 'root'
})
export class ApibasketService {

  constructor(private http: HttpClient) { }

  addToBasket(id) {
    return this.http.post<IBasketReuslt>(GlobalConstants.apiURL + 'basket/add', parseInt(id), {withCredentials: true});
  }

  getAllFromBasket() {
    return this.http.get<IBasket[]>(GlobalConstants.apiURL + 'basket/get', {withCredentials: true});
  }

  Decrease(id: number) {
    return this.http.post<number>(GlobalConstants.apiURL + 'basket/Decrease', id, {withCredentials: true});
  }

  Increase(id: number) {
    return this.http.post<number>(GlobalConstants.apiURL + 'basket/Increase', id, {withCredentials: true});
  }

  Remove(id: number) {
    return this.http.post<boolean>(GlobalConstants.apiURL + 'basket/Remove  ', id, {withCredentials: true});
  }
}
