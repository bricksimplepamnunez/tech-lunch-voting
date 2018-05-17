import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  openContact() {
  	const dialogConfig = new MatDialogConfig();

  	dialogConfig.autoFocus = true;

  	this.dialog.open(ContactDialogComponent, dialogConfig);
  }

  ngOnInit() {
  }
}
