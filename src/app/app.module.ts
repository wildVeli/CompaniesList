import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsComponent } from './company-details/company-details.component'; 


@NgModule({
  declarations: [
    AppComponent,
    BasicScrollComponent,
    CompanyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
