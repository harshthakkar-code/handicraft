import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewMoreComponent>) { }
  onCancelClick() {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
