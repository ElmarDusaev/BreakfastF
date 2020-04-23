import { Component, OnInit } from '@angular/core';
import {TotalBasketEventListenerService} from '../../services/total-basket-event-listener.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  totalInBasket: number;

  constructor(private totalEvent: TotalBasketEventListenerService) { }

  ngOnInit(): void {
    this.totalEvent.TotalChangeEvent.subscribe(data => this.totalInBasket = data);
  }

}
