import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductMasterPageComponent } from './product-master-page/product-master-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductServiceService } from './Shared/Services/product-service.service';
import { CategoryServiceService } from './Shared/Services/category-service.service';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    ProductMasterPageComponent,
    CategoryDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ProductServiceService,CategoryServiceService,ToastrService],
  bootstrap: [AppComponent],
  entryComponents:[CategoryDialogComponent]
})
export class AppModule { }
