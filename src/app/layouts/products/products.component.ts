import {Component, OnInit, Output} from '@angular/core';
import {ApiproductsService} from '../../services/apiproducts.service';
import {IProduct} from '../../models/IProduct';
import {Observable} from 'rxjs';
import {ICategory} from '../../models/ICategory';
import {IProducts} from '../../models/IProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data: IProducts;
  filter = 0;
  constructor(public apiProducts: ApiproductsService) { }

  ngOnInit(): void {
    this.apiProducts.getProducts().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

}
