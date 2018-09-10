import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {BasketComponent} from './basket/basket.component';
import {OrderAddressComponent} from './order-address/order-address.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'order', component: OrderAddressComponent},
  {path: 'menu/:id', component: MenuListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
