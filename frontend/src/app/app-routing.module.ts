import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'static', loadChildren: () => import('./static-pages/static-pages.module').then(m => m.StaticPagesModule)},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
