import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
