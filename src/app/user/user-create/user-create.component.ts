import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User('','','','','','');

  save(): void {
    this.usersvc.create(this.user)
      .subscribe(resp =>{ // successful add
          console.log(resp);
          this.router.navigateByUrl('user/list');
        },
        err =>{ console.error(err);} // error when adding new user
      );
  }

  constructor(private router: Router, private usersvc: UserService,
    private syssvc: SystemService ) { }

  ngOnInit() {
  }

}
