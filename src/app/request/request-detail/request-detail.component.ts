import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../user/user.class';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;
  verify: boolean = false;

  verifyDelete(): void{
    this.verify = true;
  }

  delete():void {
    this.requestsrvc.delete(this.request)
    .subscribe(
      resp => {
        console.log("Request Deleted", resp);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Request Delete failed", err);
      }
    )
  }

  
  constructor(private requestsrvc: RequestService, private router:Router,
    private syssvc: SystemService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsrvc.get(id)
      .subscribe(resp => {
        console.log(resp);
        this.request = resp;
      })
  }

}
