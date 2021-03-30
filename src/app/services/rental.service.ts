import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';
import { environment } from "../../environments/environment"
import { ResponseModelBase } from '../models/responseModelBase';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  addRental(rental:Rental):Observable<ResponseModelBase>{
    let newPath = this.apiUrl + "rentals/add";
    return this.httpClient.post<ResponseModelBase>(newPath, rental);
  }

  getRentalDetails():Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + "rentals/getdetails"
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }
}
