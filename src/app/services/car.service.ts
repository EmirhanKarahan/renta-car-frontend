import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { environment } from "../../environments/environment"
import { identifierModuleUrl } from '@angular/compiler';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}
  
  getCarById(carId:number):Observable<ResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbyid?id=" + carId;
    return this.httpClient.get<ResponseModel<Car>>(newPath);
  }


  getCarsDetails():Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcarsdetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsById(carId:number):Observable<ResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbyid?id=" + carId;
    return this.httpClient.get<ResponseModel<CarDetailDto>>(newPath);
  }

  getCarsDetailsByBrandName(brandName:string):Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcarsdetailsbybrandname?brand=" + brandName;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsDetailsByColorName(colorName:string):Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcarsdetailsbycolorname?color=" + colorName;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsDetailsByBrandNameAndColorName(brandName: string, colorName: string) :Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + `cars/getcarsdetailsbybrandnameandcolorname?brand=${brandName}&color=${colorName}`;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
