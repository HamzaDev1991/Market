import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { PeoductDetailsComponent } from './components/peoduct-details/peoduct-details.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    PeoductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
