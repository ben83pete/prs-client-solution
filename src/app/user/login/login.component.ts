import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  username: string = '';
  password: string = '';
  message: string = ' ';

  logIn(): void {
    this.usersvc.login(this.username, this.password)
      .subscribe( resp =>{
        console.log("login successful", resp);
        this.syssvc.currentUser = resp;
        this.router.navigateByUrl("/home")
      },
      err=> {
        console.error("Login Failed - User Name and/or Password not found.");
        this.message ="Login Failed - User Name and/or Password not found.";
      }
        );
  }
  constructor(private usersvc: UserService, private router: Router,
     private syssvc: SystemService) { }

  ngOnInit() {
    this.syssvc.currentUser = null;  // this clears the logged in information, user not logged in
  }

}
