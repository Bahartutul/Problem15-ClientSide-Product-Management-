import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../ModelClass/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  rootUrl="https://localhost:44382/api/";
  
  constructor(private http:HttpClient) { }

  getAll(){
  return this.http.get(this.rootUrl+"Products");
  }
  updateProduct(products:Product){
    let id=products.productId;
   return this.http.put(this.rootUrl+"Products/"+id,products);
  }
  submitProduct(product:Product){
    return this.http.post(this.rootUrl+"Products",product);
  }
  deleteProducts(id:number){
    return this.http.delete(this.rootUrl+"Products/"+id);
  }
}
