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
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-operations',
  templateUrl: './brand-operations.component.html',
  styleUrls: ['./brand-operations.component.css'],
})
export class BrandOperationsComponent implements OnInit {
  addBrandForm: FormGroup;
  updateBrandForm: FormGroup;
  brands: Brand[];

  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.createAddBrandForm();
    this.createUpdateBrandForm();
  }

  createAddBrandForm() {
    this.addBrandForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  createUpdateBrandForm() {
    this.updateBrandForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  updateBrand(){
    if(this.updateBrandForm.valid){
      let brandModel =  Object.assign({}, this.updateBrandForm.value);
      this.brandService.updateBrand(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/');
        },
        (responseError) => {
          if (responseError.error) {
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
      )
    }
  }

  addBrand() {
    if (this.addBrandForm.valid) {
      let brandModel = Object.assign({}, this.addBrandForm.value);
      this.brandService.addBrand(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/brand-operations');
        },
        (responseError) => {
          if (responseError.error) {
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
