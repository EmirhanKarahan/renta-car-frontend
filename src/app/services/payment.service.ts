import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModelBase } from '../models/responseModelBase';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  pay(amount:number):Observable<ResponseModelBase>{
    return this.httpClient.post<ResponseModelBase>(`${this.apiUrl}payments\\pay`, amount)
  }
}