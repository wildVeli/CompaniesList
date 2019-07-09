import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company: any=[];

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService
  ) { }


  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.companiesService.getCompany(id).subscribe(company => this.company = company);

  }
  ngOnInit() {
    this.getCompany();
  }

}
