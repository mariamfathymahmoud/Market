import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './components/all-product/all-product.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/component/shared.module';



@NgModule({
  declarations: [
    AllProductComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    NgModule
  ],

})
export class ProductsModule { }
