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
import { TechnicalDataComponent } from './product/details/item/item-details/technical-data/technical-data.component';
import { InsQxComponent } from './product/details/item/item-details/ins-qx/ins-qx.component';
import { PdfComponent } from './product/details/item/item-details/technical-data/pdf/pdf.component';
import { VideoComponent } from './product/details/item/item-details/technical-data/video/video.component';
import { AnimationComponent } from './product/details/item/item-details/animation/animation.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { Model3dComponent } from './product/details/item/item-details/model3d/model3d.component';
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
    TechnicalDataComponent,
    PdfComponent,
    VideoComponent,
    Model3dComponent,
    AnimationComponent,
    FavoriteComponent,
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
