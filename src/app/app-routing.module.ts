import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {BasketComponent} from './basket/basket.component';
import {OrderAddressComponent} from './order-address/order-address.component';
import {OrdersComponent} from './orders/orders.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {LoginComponent} from './login/login.component';
import {RoleGuard} from './shared/RoleGuard';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'order', component: OrderAddressComponent},
  {path: 'menu/:id', component: MenuListComponent, canActivate: [RoleGuard]},
  {path: 'orders', component: OrdersComponent, canActivate: [RoleGuard]},
  {path: 'orders/:id', component: OrdersListComponent, canActivate: [RoleGuard]},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
