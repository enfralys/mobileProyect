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
import { InsQxComponent } from './product/details/item/item-details/ins-qx/ins-qx.component';
import { PdfComponent } from './product/details/item/item-details/technical-data/pdf/pdf.component';
import { VideoComponent } from './product/details/item/item-details/technical-data/video/video.component';
import { AnimationComponent } from './product/details/item/item-details/animation/animation.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { Model3dComponent } from './product/details/item/item-details/model3d/model3d.component';
import { ArComponent } from './product/details/item/item-details/model3d/AR/AR.component';


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
    path: 'favorites', component: FavoriteComponent
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
    path: 'product-list/details/:id/item/:id/item-details/:id/model3d/:id', component: Model3dComponent
  },
  {
    path: 'product-list/details/:id/item/:id/item-details/:id/model3d/:id/AR/:id', component:ArComponent
  },
  {
    path: 'product-list/details/:id/item/:id/item-details/:id/technical-data/:id/pdf/:id', component: PdfComponent
  },
  {
    path: 'product-list/details/:id/item/:id/item-details/:id/technical-data/:id/videos/:id', component: VideoComponent
  },
  {
    path: 'product-list/details/:id/item/:id/item-details/:id/insqx/:id', component: InsQxComponent
  },
  {
    path: 'product-list/details/:id/item/:id/item-details/:id/animation/:id', component: AnimationComponent
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
