import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AllProductComponent } from 'src/app/products/components/all-product/all-product.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AllProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    
  ],
  exports:[
    HeaderComponent,
    AllProductComponent
  ]

})
export class SharedModule { }
