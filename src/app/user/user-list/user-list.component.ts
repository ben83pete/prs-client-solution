import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class'
import { Subscriber } from 'rxjs';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[]

  searchCriteria: string = '';


  constructor(private usersvc: UserService, private syssvc: SystemService ) { }

  ngOnInit() {
    this.usersvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.users = resp;
      });
  }

}
