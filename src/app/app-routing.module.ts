import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ARComponent } from './ar/ar.component';
import { ProductComponent } from './product/product.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './product/details/details.component';
import { ItemComponent } from './product/details/item/item.component';
import { ItemDetailsComponent } from './product/details/item/item-details/item-details.component';
import { TechnicalDataComponent } from './product/details/item/item-details/technical-data/technical-data.component';


const routes: Routes = [
   {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
  path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'ar', component: ARComponent
  },
  {
    path: 'product-list', component: ProductComponent
  },
  {
    path: 'product-list/details/:id', component: DetailsComponent
  },
  {
    path: 'product-list/details/:id/item/:id', component: ItemComponent
  },
  {
    path: 'product-list/details/:id/item/:id/item-details/:id', component: ItemDetailsComponent
  },
  {
    path: 'product-list/details/:id/item/:id/item-details/:id/technical-data/:id', component: TechnicalDataComponent
  },
  {
    path: 'certificado', component: CertificadosComponent
  },
  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'sidebar', component: SidebarComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
