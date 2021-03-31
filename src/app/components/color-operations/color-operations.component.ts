import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-operations',
  templateUrl: './color-operations.component.html',
  styleUrls: ['./color-operations.component.css'],
})
export class ColorOperationsComponent implements OnInit {
  addColorForm: FormGroup;
  updateColorForm: FormGroup;
  colors: Color[];

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.createUpdateColorForm();
    this.createAddColorForm();
  }

  createAddColorForm() {
    this.addColorForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  createUpdateColorForm() {
    this.updateColorForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  updateColor(){
    if(this.updateColorForm.valid){
      let colorModel =  Object.assign({}, this.updateColorForm.value);
      this.colorService.updateColor(colorModel).subscribe(
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

  addColor() {
    if (this.addColorForm.valid) {
      let colorModel = Object.assign({}, this.addColorForm.value);
      this.colorService.addColor(colorModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/addcolor');
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
