import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeoductService {

  constructor(private http:HttpClient)
 {

  }

  getAllProducts()
  {
    return this.http.get('https://fakestoreapi.com/products')
  }
 
  
 
  getAllCategories()
  {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
 
  getProductsByCategory(categoryName:string)
  {
    return this.http.get('https://fakestoreapi.com/products/category/'+categoryName)
  }
}
