import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { environment } from "../../environments/environment"
import { ResponseModelBase } from '../models/responseModelBase';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color:Color):Observable<ResponseModelBase>{
    let newPath = this.apiUrl + "colors/add"
    return this.httpClient.post<ResponseModelBase>(newPath, color);
  }

  updateColor(color: Color):Observable<ResponseModelBase> {
    let newPath = this.apiUrl + "colors/update"
    return this.httpClient.post<ResponseModelBase>(newPath, color);

  }
  
}
