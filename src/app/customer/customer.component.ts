import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CustDataService } from './cust-data.service';
import { CustTbl } from './cust-tbl';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  dataSource:MatTableDataSource<CustTbl>;
  temparr:CustTbl[];
  displayedColumns:string[]=['cust_name','ph_no','action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:CustDataService,
      public _dialog:MatDialog) {
    this.dataSource=new MatTableDataSource();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
   }
  // onEdit(row){
  //   this._dialog.open(StudentviewmoredialogComponent,{
  //     data:row
  //   });

  ngOnInit() {
    this._data.getAllCustomers().subscribe(
      (data:any)=>{
        this.dataSource=data;
        this.temparr=data;
      }
    );
  }
  delCustomer(email){
    if(confirm("Are you sure?")){
      this._data.deleteCustomer(email).subscribe(
        (data:any)=>{
          this.temparr.splice(this.temparr.indexOf(email),1)
          this.dataSource.data =this.temparr;
        }
      )};
  }

}
