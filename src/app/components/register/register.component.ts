import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  faCarSide = faCarSide;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routerService:Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {this.createRegisterForm();}

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() { if (this.registerForm.valid) {
    let registerModel = Object.assign({}, this.registerForm.value);
    this.authService.register(registerModel).subscribe(
      (response) => {
        this.toastrService.info(response.message);
        this.routerService.navigate(["login"]);
      },
      (responseError) => {
        this.toastrService.error(responseError.error);
      }
    );
  }}
}
