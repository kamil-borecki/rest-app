import { Component, OnInit } from '@angular/core';
import { User } from 'src/common/models';
import { UserService } from 'src/common/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {
  public currentPage = 1;
  public itemsPerPage = 4;
  public searchIn = ['id', 'name', 'username', 'email'];
  public orderQuery = { column: '', order: '' };
  public users: User[] = [];
  public query: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.itemsPerPage = parseInt(localStorage.getItem('itemsPerPage'), 10) || 4;
    this.userService.list().subscribe((data: User[]) => {
      this.users = data;
    });
  }
  setItemsPerPage(items: number) {
    localStorage.setItem('itemsPerPage', '' + items);
    this.itemsPerPage = items;
  }

  setOrder(column) {
    if (this.orderQuery.column === column) {
      this.orderQuery = { column, order: this.orderQuery.order === 'desc' ? 'asc' : 'desc'};
    } else {
      this.orderQuery = { column, order: 'desc' };
    }
    this.currentPage = 1;
  }
}
