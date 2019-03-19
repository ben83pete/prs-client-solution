import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  userDetail: User;
  verify: boolean = false;

  verifyDelete(): void{
    this.verify = true;
  }

  delete():void {
    this.usersrv.delete(this.userDetail)
    .subscribe(
      resp => {
        console.log("User Deleted", resp);
        this.router.navigateByUrl("/user/list");
      },
      err => {
        console.error("User Delete failed", err);
      }
    )
  }

  constructor(private usersrv: UserService, private route: ActivatedRoute,
    private router: Router, private syssvc: SystemService) { 
      }    

  ngOnInit() {
    let id = this.route.snapshot.params.id;
      this.usersrv.get(id)
      .subscribe(resp=>{
        console.log(resp);
        this.userDetail = resp;
      });
    }

}
