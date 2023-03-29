import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Product } from './product';
import { ProductComponent } from './product/product.component';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http:HttpClient) { }
  public loginuserfromremote(user:User):Observable<any>
  {
return this.http.post<any>("http://localhost:8080//user/login",user)
  }
  public register(user:User):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/user",user)
  }
public addcategory(category:Category):Observable<any>
{
  return  this.http.post<any>("http://localhost:8080/category",category)
}
public addproduct(product:Product):Observable<any>
{
  return this.http.post<any>("http://localhost:8080/product",product)
}
public getallproducts():Observable<Product[]>
{
  return this.http.get<Product[]>("http://localhost:8080/products")
}
}
