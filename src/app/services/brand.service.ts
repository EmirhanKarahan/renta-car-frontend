import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from "../../environments/environment"
import { ResponseModelBase } from '../models/responseModelBase';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
 
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

   getBrands():Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  addBrand(brand:Brand):Observable<ResponseModelBase>{
    let newPath = this.apiUrl + "brands/add"
    return this.httpClient.post<ResponseModelBase>(newPath, brand);
  }

  updateBrand(brand:Brand):Observable<ResponseModelBase>{
    let newPath = this.apiUrl + "brands/update"
    return this.httpClient.post<ResponseModelBase>(newPath, brand);
  }

}
