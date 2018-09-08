import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './admin/admin.component';
import {CustomerComponent} from './customer/customer.component';
import {MenuService} from './shared/menu.service';
import { MenuListComponent } from './menu-list/menu-list.component';
import { BasketComponent } from './basket/basket.component';
import {BasketService} from './shared/basket.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    CustomerComponent,
    MenuListComponent,
    BasketComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MenuService,
    BasketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
