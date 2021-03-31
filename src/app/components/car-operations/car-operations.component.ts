import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-operations',
  templateUrl: './car-operations.component.html',
  styleUrls: ['./car-operations.component.css'],
})
export class CarOperationsComponent implements OnInit {
  addCarForm: FormGroup;
  updateCarForm: FormGroup;
  carDetails:CarDetailDto[];
  brands:Brand[];
  colors:Color[];
  
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    this.getCarDetails();
    this.createAddCarForm();
    this.createUpdateCarForm();
  }

  getColors() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getCarDetails(){
    this.carService.getCarsDetails().subscribe(response=>{this.carDetails = response.data});
  }

  getBrands() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createAddCarForm() {
    this.addCarForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  createUpdateCarForm() {
    this.updateCarForm = this.formBuilder.group({
      id:["", Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  updateCar(){
    if (this.updateCarForm.valid) {
      let carModel = Object.assign({}, this.updateCarForm.value);
      this.carService.updateCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/');
        },
        (responseError) => {
          if (responseError.error) {
            console.error(responseError);
            this.toastrService.error(responseError.error.message, 'Hata');
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
    }
    else {
      this.toastrService.error('Formu doldurmalısınız', 'Hata');
    }
  }

  addCar() {
    if (this.addCarForm.valid) {
      let carModel = Object.assign({}, this.addCarForm.value);
      this.carService.addCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/');
        },
        (responseError) => {
          if (responseError.error) {
            console.error(responseError);
            
            this.toastrService.error(responseError.error.message, 'Hata');
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
}
