import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuService} from './shared/services/menu.service';
import {MenuListComponent} from './menu/menu-list/menu-list.component';
import {BasketComponent} from './basket/basket.component';
import {BasketService} from './shared/services/basket.service';
import {OrderAddressComponent} from './orders/order-address/order-address.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrdersListComponent} from './orders/orders-list/orders-list.component';
import {OrdersComponent} from './orders/orders.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './shared/services/login.service';
import {RoleGuard} from './shared/RoleGuard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuListComponent,
    BasketComponent,
    OrderAddressComponent,
    OrdersListComponent,
    OrdersComponent,
    LoginComponent,
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
    LoginService,
    RoleGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
