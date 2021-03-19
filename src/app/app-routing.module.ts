import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';

const routes: Routes = [
   {path:"", pathMatch:"full", component:CarListComponent},
   {path:"cars", component:CarListComponent},
   {path:"cars/brand/:brandName", component:CarListComponent},
   {path:"cars/color/:colorName", component:CarListComponent},
   {path:"cars/:carId", component:CarDetailsComponent},
   {path:"rentals", component:RentalListComponent},
   {path:"customers", component:CustomerListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
