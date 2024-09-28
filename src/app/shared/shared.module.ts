import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
 RouterModule,
 HttpClientModule,
 BrowserModule,
 ProductsModule
  ],
  exports:[
  HeaderComponent  
  ]
})
export class SharedModule { }
