import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User('','','','','','',);

  // pwCheck() {
  //   let pw = document.getElementById('PassInput')
  //   if (pw.type === 'password') {
  //     pw.type = "text";
  //   }
  //   else{pw.type = "password";}
  // };

  save(): void{
    this.usersvc.create(this.user)
      .subscribe(
        resp =>{ // successful add
          console.log(resp);
          this.route.navigateByUrl('user/list');
        },
        err =>{ console.error(err);} // error when adding new user
      );
  }

  constructor(private route: Router, private usersvc: UserService ) { }

  ngOnInit() {
  }

}
