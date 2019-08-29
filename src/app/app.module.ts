import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ARComponent } from './ar/ar.component';
import { ProductComponent } from './product/product.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './product/details/details.component';
import { ItemDetailsComponent } from './product/details/item/item-details/item-details.component';
import { ItemComponent } from './product/details/item/item.component';
import { InsQxComponent } from './product/details/item/item-details/ins-qx/ins-qx.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ARComponent,
    ProductComponent,
    DetailsComponent,
    CertificadosComponent,
    HomeComponent,
    SidebarComponent,
    InsQxComponent,
    ItemDetailsComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
