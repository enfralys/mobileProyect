import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ARComponent } from './ar/ar.component';
import { ProductComponent } from './product/product.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { HomeComponent } from './home/home.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { viewPDFComponent } from './favoritos/viewpdf/viewpdf.components';
import { fichaTecnicaComponent } from './favoritos/ficha_tecnica/fichaTecnica.component';
import { viewVideoComponent } from './favoritos/viewVideo/viewVideo.compoent';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ARComponent,
    ProductComponent,
    CertificadosComponent,
    HomeComponent,
    FavoritosComponent,
    viewPDFComponent,
    fichaTecnicaComponent,
    viewVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
