import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeoductService {

  url=environment.baseUrl;
  constructor(private http:HttpClient)
 {

  }

  getAllProducts()
  {
    return this.http.get(this.url+'products')
  }
 
  
 
  getAllCategories()
  {
    return this.http.get(this.url+'products/categories')
  }
 
  getProductsByCategory(categoryName:string)
  {
    return this.http.get(this.url+'products/category/'+categoryName)
  }
}
