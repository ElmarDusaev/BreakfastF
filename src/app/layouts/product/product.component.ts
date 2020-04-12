import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../../models/IProduct';
import {ApibasketService} from '../../services/apibasket.service';
import {Observable} from 'rxjs';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() data: IProduct;
  constructor(private api: ApibasketService) { }
  ngOnInit(): void {

  }

  AddProduct($event: any) {
    this.api.addToBasket($event.target.value).subscribe(v => this.data.inBasket = v);
  }

}
