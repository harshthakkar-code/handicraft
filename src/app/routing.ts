import {Routes, RouterModule} from "@angular/router";
import { CustomerComponent } from './customer/customer.component';
const arr:Routes=[
  {path:'',component:CustomerComponent}

];
export const arr_routing =RouterModule.forRoot(arr);
