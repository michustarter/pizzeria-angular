import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {BasketComponent} from './basket/basket.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'menu/:id', component: MenuListComponent},
  {path: 'basket', component: BasketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
