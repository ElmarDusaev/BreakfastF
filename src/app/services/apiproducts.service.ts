import { Injectable } from '@angular/core';
import {IProduct} from '../models/IProduct';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalConstants} from '../common/GlobalConstants';
import {IProducts} from '../models/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ApiproductsService {


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProducts>(GlobalConstants.apiURL + 'Product/ProductsList', {withCredentials: true});
  }
}
