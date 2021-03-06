import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  rootUrl="https://localhost:44382/api/";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.rootUrl+"Categories");
  }
}
