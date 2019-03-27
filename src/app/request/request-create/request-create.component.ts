import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { User } from '../../user/user.class';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  user: User[];
  request: Request = new Request('New Request','','','','','',0,0)


  save(): void{
    this.request.userId = this.syssvc.currentUser.id;
    this.requestsrvc.create(this.request)
      .subscribe(
        resp =>{
          console.log(resp);
          this.router.navigateByUrl('request/list');
        },
        err =>{ console.error(err);} 
      );
  }

  constructor(private requestsrvc: RequestService, private router:Router,
     private syssvc: SystemService ) { }

  ngOnInit() {
    this.syssvc.currentUser.id;
  }
}
