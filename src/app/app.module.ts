import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    BrandListComponent,
    ColorListComponent,
    CustomerListComponent,
    RentalListComponent,
    NaviComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
