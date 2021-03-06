import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IOrderInformation} from '../models/IOrderInformation';
import {ApibasketService} from '../services/apibasket.service';
import {IBasket} from '../models/IBasket';
import {ApiorderService} from '../services/apiorder.service';
import {IOrderResult} from '../models/IOrderResult';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TotalBasketEventListenerService} from '../services/total-basket-event-listener.service';

declare let google: any;

@Component({
  selector: 'app-basket',
  styleUrls: ['./basket.component.scss'],
  templateUrl: './basket.component.html'
})
export class BasketComponent implements OnInit {

  lat;
  lng;
  ShowMap = false;
  orderInformation: IOrderInformation;
  orderResult: IOrderResult = new IOrderResult();
  Basket: IBasket[];
  public Total = 0;
  @ViewChild('MyAddress', {static: false}) MyAddress: ElementRef;
  @ViewChild('MyName', {static: false}) MyName: ElementRef;
  @ViewChild('MyPhone', {static: false}) MyPhone: ElementRef;
  @ViewChild('MyDeliveryTime', {static: false}) MyDeliveryTime: ElementRef;
  form: FormGroup;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private apibasket: ApibasketService, private apiorder: ApiorderService, private route: Router, private TotalService: TotalBasketEventListenerService) {
  }


  ngOnInit(): void {
    this.orderInformation = new IOrderInformation();
    this.form = new FormGroup({
      Address: new FormControl('' , [Validators.required]),
      Name: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required]),
      DeliveryTime: new FormControl('', [Validators.required])
    });

    this.apibasket.getAllFromBasket().subscribe(data => {
      this.Basket = data;
      data.forEach((item) => {
          this.Total = this.Total + item.price * item.qty;
      });
    });
  }


  SetMarker($event) {

    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.orderInformation.Latitude = this.lat;
    this.orderInformation.Longtitude = this.lng;

    const geocoder = new google.maps.Geocoder();
    const latlng = new google.maps.LatLng(this.lat, this.lng);
    const request = { latLng: latlng };

    geocoder.geocode(request, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const result = results[0];
        const address = result.formatted_address;
        this.MyAddress.nativeElement.value = address;
        this.orderInformation.Address = address;
      }
    });


  }

  createOrder() {
    if (this.form.valid) {
      const submitForm = {...this.form.value};

      this.orderInformation.Address = submitForm.Address;
      this.orderInformation.DeliveryDateTime = submitForm.DeliveryTime;
      this.orderInformation.ClientName = submitForm.Name;
      this.orderInformation.Phone = submitForm.Phone;

      console.log(this.orderInformation);

      this.apiorder.createOrder(this.orderInformation).subscribe({
        next: data => {
          this.lat = null;
          this.lng = null;
          this.Basket = null;
          this.MyAddress.nativeElement.value = '';
          this.MyName.nativeElement.value = '';
          this.MyPhone.nativeElement.value = '';
          this.MyDeliveryTime.nativeElement.value = '';
          this.Total = 0;
          this.orderResult = data;
          this.orderResult.status = true;
          console.log(data);
        },
        error: e => console.error(e)
      });
    }

  }

  AddDateTIme($event) {
    console.log($event);
    this.orderInformation.DeliveryDateTime = $event.value;
    console.log(this.orderInformation);
  }

  Decrease(id: number) {
    console.log(id);
    const product = this.Basket.find(a => a.id === id);
    if (product.qty === 1) { return; } else {
    this.apibasket.Decrease(id).subscribe(data => {
      product.qty = data;
      this.CalcTotal();
    });
    }
  }

  Increase(id: number) {
    console.log(id);
    const product = this.Basket.find(a => a.id === id);
    this.apibasket.Increase(id).subscribe(data => {
      product.qty = data;
      this.CalcTotal();
    });
  }

  Remove(id: number) {
    this.apibasket.Remove(id).subscribe(data => {
      if (data) {
        const index = this.Basket.findIndex(d => d.id === id);
        this.Basket.splice(index, 1);
        this.CalcTotal();
        this.TotalService.ProductRemove();
      }
    });
  }

  CalcTotal() {
    this.Total = 0;
    this.Basket.forEach(a => this.Total += a.qty * a.price);
  }

  Thanks() {
    this.orderResult.status = false;
    this.route.navigate(['/main']);
  }

  ClearCord() {
    this.orderInformation.Latitude = 0;
    this.orderInformation.Longtitude = 0;
    console.log(this.orderInformation);
  }
}
