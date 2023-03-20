import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

   base_url="https://localhost:7065/api/Product";

  ngOnInit()
  {
    this.GetProducts();
  }

  GetProducts()
  {
    return this.http.get(this.base_url);
    console.log();
  }

  AddNewProducts(prod:Product):Observable<Product[]>
  {
    return this.http.post<Product[]>(this.base_url,prod);
  }

  DeleteProduct(id:string):Observable<Product[]>
  {
    return this.http.delete<Product[]>(this.base_url+"/"+id);
  }

  UpdateProduct(product:Product)
  {
    return this.http.put<Product[]>(this.base_url+"/"+product.id,product);
  }

  GetProductById(id:string)
  {
    return this.http.get(this.base_url+"/"+id);
  }



}
