import {Routes} from "@angular/router"
import { from } from 'rxjs'
import { ProductMasterPageComponent } from './product-master-page/product-master-page.component'
export const appRoutes:Routes=[
    {path:'ProductMaster', component:ProductMasterPageComponent},  
    
    {path:'',redirectTo:'/ProductMaster',pathMatch:'full'}
    
    ]
