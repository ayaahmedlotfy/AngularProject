import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/category.model';
//import{AllCategoryResponse} from 'src/app/_models/category.model';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categoryArray:Category[]=[
  // {id:1,name:"Arts&Crafts"},
  // {id:2,name:"Automotive"},
  // {id:3,name:"Baby"},
  // {id:4,name:"Books"},
  // {id:5,name:"Eletronics"},
  // {id:6,name:"Women's Fashion"},
  // {id:7,name:"Men's Fashion"},
  // {id:8,name:"Health & Household"},
  // {id:9,name:"Home & Kitchen"},
  // {id:10,name:"Military Accessories"},
  // {id:11,name:"Movies & Television"},
  // {id:12,name:"Sports & Outdoors"},
  // {id:13,name:"Tools & Home Improvement"},
  // {id:14,name:"Toys & Games"}

]



  constructor(private httpClient: HttpClient) { }



  getAllCategories():Observable<Category[]>
  {//return this.categoryArray
    console.log(this.httpClient.get<Category[]>(environment.baseUrl + 'category'))
    return this.httpClient.get<Category[]>(environment.baseUrl + 'category');

  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
}
