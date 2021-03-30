import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carImages/getImagesByCarId?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }


}
