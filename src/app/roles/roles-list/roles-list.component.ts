import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {

  users = [];
  displayedColumns: string[] = ['name', 'email', 'type', 'actions'];

  constructor(private userService: UserDataService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log("datasource-", this.users);
  }

}
