import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  /*test with json placeholder */
  private heroesUrl = 'https://jsonplaceholder.typicode.com'; 

constructor(
  private http: HttpClient) { }

    /** GET heroes from the server */
  getCompanies () {
    return this.http.get(this.heroesUrl+'/posts');
  }
}
