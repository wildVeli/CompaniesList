import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  /*test with json placeholder 'http://localhost:8080/CompaniesService2/webresources/'
  specified in the proxy.conf.json to auth the CROSS security*/
  private apiUrl = '/CompaniesService2/webresources/'; 
 
constructor(
  private http: HttpClient) { }

  
    /** GET heroes from the server */
  getCompanies () {
    console.log('getCompanies');
    return this.http.get(this.apiUrl+'entity.companies');

  }

  getCountCompanies(){
    return this.http.get(this.apiUrl+'entity.companies/count');
  }

  getCompany(id: number){
    console.log('try getCompany id: '+id);
    return this.http.get('/CompaniesService2/webresources/entity.companies/'+id);
  }
}
