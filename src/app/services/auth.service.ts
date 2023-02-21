import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}
  apiUrl = 'https://localhost:3000/user';

  GetAll(){
      return this.http.get(this.apiUrl);
  }
  Getbycode(code: any){
    return this.http.get(this.apiUrl + '/' + code);
  }
  Proceedregister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata);
  }
  UpdateUser(code:any ,inputdata: any){
    return this.http.post(this.apiUrl+'/'+code, inputdata)
  }
}