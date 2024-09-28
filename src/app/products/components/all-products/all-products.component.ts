import { Component, OnInit } from '@angular/core';
import { PeoductService } from '../../services/peoduct.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:any[]=[]
  categories:any[]=[]

  constructor(private services:PeoductService)
  {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }
  getAllProducts()
  {
    this.services.getAllProducts().subscribe((res:any)=>
      {
        this.products=res
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
