import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.css']
})
export class BasicScrollComponent implements OnInit {

  companies: any=[];
  people;

  constructor(private companiesService: CompaniesService) {
      this.people = Array(100).fill(1).map(_=> {
        return {
          name: "juan",
          bio:"engineer"
        };
      });      
    }
  
  getCompanies():void {
    this.companiesService.getCompanies().subscribe(companies => this.companies = companies)
  }
  
  
  ngOnInit() {
    this.getCompanies();
  }

}
