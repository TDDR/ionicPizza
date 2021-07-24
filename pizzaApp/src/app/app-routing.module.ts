import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'order-manager',
    loadChildren: () => import('src/app/home/order-manager/order-manager.module').then( m => m.OrderManagerPageModule)
  },
  {
    path: 'current-order',
    loadChildren: () => import('src/app/home/current-order/current-order.module').then( m => m.CurrentOrderPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('src/app/home/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
