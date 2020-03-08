import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from "ngx-toastr";
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../Shared/Services/product-service.service';
import { Product } from '../Shared/ModelClass/product';
import { CategoryServiceService } from '../Shared/Services/category-service.service';
import { Category } from '../Shared/ModelClass/category';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product-master-page',
  templateUrl: './product-master-page.component.html',
  styleUrls: ['./product-master-page.component.css']
})
export class ProductMasterPageComponent implements OnInit {
  products: Product[];
  product:Product;
  categories: Category;
  productName:string;
  createDate:string;
  p: number = 1;
  
  constructor(private dialog: MatDialog, private toastr: ToastrService,
    private productService: ProductServiceService, private categoryService: CategoryServiceService) {}

  ngOnInit() {
    this.getAllData();
    // this.resetField();
    this.productName="aaaaaaaa";
  }
  resetField(){
    this.productName='';
    this.createDate='';
  }
  addCategoryDialog() {
    const dialogConf = new MatDialogConfig();
    dialogConf.autoFocus = true;
    dialogConf.disableClose = true;
    dialogConf.width = "50%";
    let dialogref = this.dialog.open(CategoryDialogComponent, dialogConf);
    dialogref.afterClosed().subscribe(
      res => {
         this.getAllData();
      })
    
  }

  getAllData() {
    this.productService.getAll().subscribe(
      res => {
        this.products = res as Product[]
      }
    )
    this.categoryService.getAll().subscribe(
      res => {
        this.categories = res as Category
      }
    )
  }

  updateRow(products:Product,productName:any,createDate:any,categoryId:any){
    this.product=new Product();
    this.product.productId=products.productId;
    this.product.productName=productName;
    this.product.categoryId=categoryId;
    this.product.createDate=createDate;
    this.productService.updateProduct(this.product).subscribe(
      res=>{
        this.getAllData();
        this.toastr.success("1-Row Updated","Product Update");
      }     
    )
  }
  addProduct(productName:any,categoryId:any,createDate:any){
    this.product=new Product();
    this.product.productName=productName;
    this.product.categoryId=categoryId;
    this.product.createDate=createDate;
    this.productService.submitProduct(this.product).subscribe(
      res=>{
        this.getAllData();
        this.toastr.success("Product Successfully Added","Product Add");
        this.resetField();
      }
    )
  }
  deleteProduct(productId:number){
    this.productService.deleteProducts(productId).subscribe(
      res=>{
        this.getAllData();
        this.toastr.error("1-Row Deleted","Product Delete");
      }
    )
  }
}
