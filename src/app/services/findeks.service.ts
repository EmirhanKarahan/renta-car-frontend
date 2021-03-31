import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindeksService {
  apiUrl = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) { }

}
