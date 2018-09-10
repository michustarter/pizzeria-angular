import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuService} from './shared/menu.service';
import { MenuListComponent } from './menu-list/menu-list.component';
import { BasketComponent } from './basket/basket.component';
import {BasketService} from './shared/basket.service';
import { OrderAddressComponent } from './order-address/order-address.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuListComponent,
    BasketComponent,
    OrderAddressComponent,
    OrdersListComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MenuService,
    BasketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
