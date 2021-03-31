import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login';
import { RegisterModel } from '../models/register';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  apiUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    let newPath = this.apiUrl + "auth/login"
    return this.httpClient.post<ResponseModel<TokenModel>>(newPath ,loginModel)
  }

  register(registerModel: RegisterModel) {
    let newPath = this.apiUrl + "auth/register"
    return this.httpClient.post<ResponseModel<RegisterModel>>(newPath ,registerModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
