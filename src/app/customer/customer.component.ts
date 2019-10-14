import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CustDataService } from './cust-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  dataSource:MatTableDataSource<CustDataService>;
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
  // }
  // onEdit(row){
  //   this._dialog.open(StudentviewmoredialogComponent,{
  //     data:row
  //   });
  }




  ngOnInit() {
  }


}
