import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'order-manager',
    loadChildren: () => import('./order-manager/order-manager.module').then( m => m.OrderManagerPageModule)
  },
  {
    path: 'current-order',
    loadChildren: () => import('./current-order/current-order.module').then( m => m.CurrentOrderPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
