import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { RentingCartComponent } from './components/renting-cart/renting-cart.component';

import {ToastrModule} from "ngx-toastr";
import { PaymentComponent } from './components/payment/payment.component';
import { ColorOperationsComponent } from './components/color-operations/color-operations.component';
import { CarOperationsComponent } from './components/car-operations/car-operations.component';
import { BrandOperationsComponent } from './components/brand-operations/brand-operations.component';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './components/register/register.component';


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
    SidebarComponent,
    CarDetailsComponent,
    FilterBrandPipe,
    FilterColorPipe,
    RentingCartComponent,
    PaymentComponent,
    ColorOperationsComponent,
    CarOperationsComponent,
    BrandOperationsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
