import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiproductsService} from '../../services/apiproducts.service';
import {IProduct} from '../../models/IProduct';
import {Observable} from 'rxjs';
import {ICategory} from '../../models/ICategory';
import {IProducts} from '../../models/IProducts';
import {TotalBasketEventListenerService} from '../../services/total-basket-event-listener.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data: IProducts;
  filter = 0;
  constructor(public apiProducts: ApiproductsService, private TotalBasketService: TotalBasketEventListenerService) { }

  ngOnInit(): void {
    this.apiProducts.getProducts().subscribe(data => {
      this.data = data;
      console.log(data);
      console.log(data.totalInBasket);
      this.TotalBasketService.SetTotal(data.totalInBasket);
    });
  }

}
