import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }


  getAllCountries(): Observable<Array<string>>{
    return this.http.get<Array<string>>(this.url + 'getAllCountries');
  }
}
