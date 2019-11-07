import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { staffDetails } from '../staffDetails'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffDetailsService {

  private _url: string ="/assets/data/staffDetails.json";


  constructor(private _http: HttpClient) { }

  getJSONData():Observable<staffDetails[]> {
    return this._http.get<staffDetails[]>(this._url);
   }

   
}
