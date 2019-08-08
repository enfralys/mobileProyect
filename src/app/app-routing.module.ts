import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ARComponent } from './ar/ar.component';
import { ProductComponent } from './product/product.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { viewPDFComponent } from './favoritos/viewpdf/viewpdf.components';
import { fichaTecnicaComponent } from './favoritos/ficha_tecnica/fichaTecnica.component';
import { viewVideoComponent } from './favoritos/viewVideo/viewVideo.compoent';
import { SidebarComponent } from './sidebar/sidebar.component';


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
    path: 'product', component: ProductComponent
  },
  {
    path: 'certificado', component: CertificadosComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'favoritos', component: FavoritosComponent
  },{
    path: 'viewpdf', component: viewPDFComponent
  },
  {
    path: 'fichaTecnica', component: fichaTecnicaComponent
  },
  {
    path: 'viewVideo', component: viewVideoComponent
  },
  {
    path: 'sidebar', component: SidebarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
