import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { PeoductDetailsComponent } from './products/components/peoduct-details/peoduct-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = 
[
  {path:"products",component:AllProductsComponent},
  {path:"details",component:PeoductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",component:AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
