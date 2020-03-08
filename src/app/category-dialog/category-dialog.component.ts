import { Component, OnInit,Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogRef
} from "@angular/material/dialog";
import { HttpClient } from '@angular/common/http';
import{ToastrService} from "ngx-toastr";
import { Category } from '../Shared/ModelClass/category';
@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {
  rootUrl="https://localhost:44382/api/";
  category:Category;
  constructor(public dialogref:MatDialogRef<CategoryDialogComponent>,private http:HttpClient,private toaster:ToastrService) { }
 
  ngOnInit() {
  }
  addCategory(CategoryName){
     this.category=new Category()
    this.category.CategoryName=CategoryName;
    this.http.post(this.rootUrl+"Categories",this.category).subscribe(
      res=>{
        this.toaster.success("Category Added Successfully","Add Category");
        this.close();
      }
    )
  }
  close() {
    this.dialogref.close();
  }

}
