import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CustDataService {

  constructor(private _http:HttpClient) { }
  url:string="http://localhost:3000/customer/";
  getAllCustomers(){
    return this._http.get(this.url);
  }
  deleteCustomer(email)
{
  let x=new HttpHeaders().set('Content-Type','application/json');
  return this._http.delete(this.url+email,{headers:x});
}

}

