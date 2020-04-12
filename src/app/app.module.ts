import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { ProductsComponent } from './layouts/products/products.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ProductComponent } from './layouts/product/product.component';
import { BasketComponent } from './basket/basket.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import {AngularYandexMapsModule} from 'angular8-yandex-maps';
import {AgmCoreModule} from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartnersComponent } from './layouts/partners/partners.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {TextMaskModule} from 'angular2-text-mask';
import { ProductsfilterPipe } from './pipes/productsfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    ProductComponent,
    BasketComponent,
    MainComponent,
    NavigationComponent,
    PartnersComponent,
    ProductsfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    // AngularYandexMapsModule.forRoot('a9cd1800-07f1-4acd-833d-9abe1f3569b7')
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOAZ3sQ2kjkL8f7Uoil6B3R4fT562HsXM'
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
