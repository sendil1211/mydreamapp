import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { HolidaysService } from ''

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  private _url: string ="/assets/data/holidays.json"
  constructor(private http: HttpClient) { }

  
  // getJSONData():Observable<orglistDetails[]> {
  //   return this.http.get<orglistDetails[]>(this._url);
  //  }

   

}
