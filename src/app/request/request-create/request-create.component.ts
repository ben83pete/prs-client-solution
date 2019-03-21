import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { User } from '../../user/user.class';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  user: User[];
  request: Request = new Request('','','','','','',0,0)

  save(): void{
    this.requestsrvc.create(this.request)
      .subscribe(
        resp =>{ // successful add
          console.log(resp);
          this.router.navigateByUrl('request/list');
        },
        err =>{ console.error(err);} // error when adding new user
      );
  }


  constructor(private requestsrvc: RequestService, private router:Router,) { }

  ngOnInit() {
  }

}
