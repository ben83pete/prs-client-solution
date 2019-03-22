import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../user/user.class';
import { SystemService } from '../../system/system.service';
import { identity } from 'rxjs';




@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  user: User[];
  request: Request;

  save(): void{
    this.requestsrvc.update(this.request)
      .subscribe(
        resp =>{
          console.log(resp);
          this.router.navigateByUrl('request/list');
        },
        err =>{ console.error(err);} 
      );
  }

  constructor(private requestsrvc: RequestService, private router: Router,
     private syssvc: SystemService, private route: ActivatedRoute ) { }

  ngOnInit() {
    let prid = this.route.snapshot.params.id;
    this.requestsrvc.get(prid) 
    .subscribe(resp =>{
      console.log(resp);
      this.request = resp;
    }); 
  }

}
