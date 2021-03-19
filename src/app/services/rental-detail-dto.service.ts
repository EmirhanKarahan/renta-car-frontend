import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetailDto } from '../models/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailDtoService {
  apiUrl = 'https://localhost:44394/api/rentals/getdetails';

  constructor(private httpClient: HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetailDto>> {
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.apiUrl);
  }
}
