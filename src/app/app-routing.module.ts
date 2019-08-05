import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ARComponent } from './ar/ar.component';
import { ProductComponent } from './product/product.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
