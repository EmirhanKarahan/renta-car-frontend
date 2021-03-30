import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-renting-cart',
  templateUrl: './renting-cart.component.html',
  styleUrls: ['./renting-cart.component.css'],
})
export class RentingCartComponent implements OnInit {
  rentalAddForm: FormGroup;
  customers: Customer[];
  carId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private router: Router,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = params['carId'];
      }
    });
    this.createRentalAddForm();
  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  rentCar() {
    if (this.rentalAddForm.valid) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value);
      rentalModel.carId = parseInt(this.carId);
      this.rentalService.addRental(rentalModel).subscribe(
        (response) => {
          localStorage.setItem("currentRent", JSON.stringify(rentalModel))
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/payment');
        },
        (responseError) => {
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
        }
      );
    } else {
      this.toastrService.error('Formu doldurmalısınız', 'Hata');
    }
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
}
