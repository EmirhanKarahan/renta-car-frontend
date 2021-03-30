import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  currentRent: Rental;
  currentCar: Car;
  totalPrice: number;

  constructor(
    private carService: CarService,
    private paymentService: PaymentService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentRent = JSON.parse(localStorage.getItem('currentRent') || '{}');
    this.carService.getCarById(this.currentRent.carId).subscribe((response) => {
      this.currentCar = response.data;
      this.calculateRentPrice();
    });
    localStorage.clear();
  }

  payRent() {
    this.paymentService.pay(this.totalPrice).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı');
      this.router.navigateByUrl('/cars');
    },(responseError) => {
      if(responseError.error){
        this.toastrService.error(
          responseError.error.message,
          'Hata'
        );
      }
      if (responseError.error.Errors) {
        for (let i = 0; i < responseError.error.Error.length; i++) {
          this.toastrService.error(
            responseError.error.Errors[i].ErrorMessage,
            'Doğrulama Hatası'
          );
        }
      }
    });
  }

  calculateRentPrice() {
    let date1 = new Date(this.currentRent.returnDate.toString());
    let date2 = new Date(this.currentRent.rentDate.toString());
    let difference = date1.getTime() - date2.getTime();
    let numberOfDays = Math.ceil(difference / (1000 * 3600 * 24));
    this.totalPrice = numberOfDays * this.currentCar.dailyPrice;
  }
}
