import { Component, OnInit } from '@angular/core';
import { PeoductService } from '../../services/peoduct.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:any[]=[]
  categories:any[]=[]

  constructor(private services:PeoductService, private spinner:NgxSpinnerService)
  {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }
  getAllProducts()
  {
    this.spinner.show();
    this.services.getAllProducts().subscribe((res:any)=>
      {
        this.products=res
        this.spinner.hide();
      },err=>
        {
          alert(err);
        }
  );

  }

  getAllCategories()
  {
    this.services.getAllCategories().subscribe((res:any)=>
      {
        this.categories=res;
      },err=>
        {
          alert(err);
        }
  );

  }

  filterProperty(event:any)
  {
    let value = event.target.value;
if(value=="All")
  {
    this.getAllProducts();

  }else
  {
    this.getProductByCategory(value);
  }
   
    console.log(value);

  }

  getProductByCategory(categoryName:string)
  {

    this.services.getProductsByCategory(categoryName).subscribe((res:any)=>
      {
        this.products=res;
      },err=>
        {
          alert(err);
        }
  )

  }



}
