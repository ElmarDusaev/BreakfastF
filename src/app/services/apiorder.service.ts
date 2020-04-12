import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {GlobalConstants} from '../common/GlobalConstants';
import {IOrderInformation} from '../models/IOrderInformation';
import {Observable} from 'rxjs';
import {error} from 'selenium-webdriver';
import {IOrderResult} from '../models/IOrderResult';


@Injectable({
  providedIn: 'root'
})
export class ApiorderService {

  constructor(private http: HttpClient) { }


  createOrder(orderInformation: IOrderInformation) {

    return this.http.post<IOrderResult>(GlobalConstants.apiURL + 'order/create', orderInformation, {withCredentials: true});
  }

}
