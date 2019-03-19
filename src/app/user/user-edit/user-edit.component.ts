import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  save(): void{
    this.usersvc.update(this.user)
    .subscribe(
      resp =>{
        console.log("update Successful: ", resp);
        this.router.navigateByUrl("/user/list");
      },
      err => {
        console.log("User Error", err);
      }
    )
  }

  constructor(private usersvc: UserService, private route: ActivatedRoute,
    private router: Router, private syssvc: SystemService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
      this.usersvc.get(id)
        .subscribe(resp =>{
          console.log(resp);
          this.user = resp;
        },
        err=> {
          console.error(err)
        },)
  }

}
