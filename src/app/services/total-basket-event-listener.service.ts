import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalBasketEventListenerService {
  Total = 0;
  TotalChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  SetTotal(Total: number) {
    console.log("SetTotal " + Total);
    this.Total = Total;
    this.TotalChangeEvent.emit(this.Total);
  }



  ProductRemove() {
    console.log("Remove" + this.Total);
    this.Total--;
    this.TotalChangeEvent.emit(this.Total);
  }
}
