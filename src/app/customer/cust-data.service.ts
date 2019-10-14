import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CustDataService {

  constructor(private _http:HttpClient) { }
  url:string="http://localhost:3000/customer /";
  getAllStudents(){
    return this._http.get(this.url);
  }
}
