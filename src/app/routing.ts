import {Routes, RouterModule} from "@angular/router";
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';

const arr:Routes=[
  {path: '',component:CustomerComponent},
  {path:'addCustomer',component:AddCustomerComponent},
  {path:'editCustomer/:email',component:EditCustomerComponent}

];
export const arr_routing =RouterModule.forRoot(arr);
