import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatedialogComponent } from './updatedialog/updatedialog.component';
import { CreatedialogComponent } from './createdialog/createdialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-profiles-list',
  templateUrl: './user-profiles-list.component.html',
  styleUrls: ['./user-profiles-list.component.scss']
})
export class UserProfilesListComponent implements OnInit {

  users = [];
  datasource:any;
  displayedColumns: string[] = ['name', 'email', 'password', 'type', 'dob', 'address', 'actions'];
  constructor(private userService: UserDataService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log("datasource-", this.users);
  }

  startEdit(i, email, name, password, type, dob, address) {
    const dialogRef = this.dialog.open(UpdatedialogComponent, {
      data: {email: email, name: name, password: password, type: type, dob: dob, address: address}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
      });
  }

  refreshTable() {
    this.users = this.userService.getUsers();
  }

  addNew() {
    const dialogRef = this.dialog.open(CreatedialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
      });
  }

  deleteItem(email) {
    this.userService.deleteData(email);
    this.openSnackBar(email + " data deleted", "");
    this.refreshTable();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
